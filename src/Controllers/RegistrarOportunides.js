const FiltrarOportunidades = require("../services/http/FiltrarOportunidades");
const AgruparOportunidades = require("../services/database/AgruparOportunidades");
const AdicionarUmPedido = require("../services/http/AdicionarUmPedido");

const ConverterOportunidadeEmPedido = require("../utils/ConverterOportunidadeEmPedido");
const ReduzirInformacoesDaOportunidade = require("../utils/ReduzirInformacoesDaOportunidade");

class RegistrarOportunides {
  #filtrarOportunidades;
  #agruparOportunidades;
  #adicionarUmPedido;
  constructor() {
    this.#agruparOportunidades = new AgruparOportunidades();
    this.#filtrarOportunidades = new FiltrarOportunidades();
    this.#adicionarUmPedido = new AdicionarUmPedido();
  }

  async Executar() {
    const todasAsOportunidadesGanhas =
      await this.#filtrarOportunidades.Executar({ businessStatus: "won" });

    if (!todasAsOportunidadesGanhas) return;

    const { data } = todasAsOportunidadesGanhas;

    if(!data) return;

    for await(const oportunidade of data) {

      const pedido = ConverterOportunidadeEmPedido({
        cli_nome: oportunidade.person_id?.name,
        item_codigo: oportunidade.id,
        item_descricao: oportunidade.title,
        item_quantidade: 1,
        item_valor: oportunidade.value,
      });

      const oportunidadeFormatada = ReduzirInformacoesDaOportunidade(oportunidade);

      await this.#adicionarUmPedido
        .Executar(pedido)
        .then(() => this.#agruparOportunidades.Executar({
            data: new Date(),
            oportunidade: oportunidadeFormatada
        }))
    }
  }
}

module.exports = RegistrarOportunides;
