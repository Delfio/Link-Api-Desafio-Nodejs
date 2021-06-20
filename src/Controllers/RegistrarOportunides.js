const ConverterOportunidadeEmPedido = require("../utils/ConverterOportunidadeEmPedido");
const ReduzirInformacoesDaOportunidade = require("../utils/ReduzirInformacoesDaOportunidade");

class RegistrarOportunides {
  #filtrarOportunidades;
  #agruparOportunidades;
  #adicionarUmPedido;
  constructor({agruparOportunidades, filtrarOportunidades, adicionarUmPedido}) {
    this.#agruparOportunidades = agruparOportunidades;
    this.#filtrarOportunidades = filtrarOportunidades;
    this.#adicionarUmPedido = adicionarUmPedido;
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
