const FiltrarOportunidades = require('../services/http/FiltrarOportunidades');
const AgruparOportunidades = require('../services/database/AgruparOportunidades');
const ConverterOportunidadeEmPedido = require('../utils/ConverterOportunidadeEmPedido');
const ReduzirInformacoesDaOportunidade = require('../utils/ReduzirInformacoesDaOportunidade');

class RegistrarOportunides {
    #filtrarOportunidades;
    #agruparOportunidades;
    constructor() {
        this.#agruparOportunidades = new AgruparOportunidades();
        this.#filtrarOportunidades = new FiltrarOportunidades();

    }

    async Executar() {
        return this.#filtrarOportunidades
            .Executar({businessStatus: 'open'})
            .then(oportunidades => {
                if(!oportunidades) return;
                
                const { data } = oportunidades;

                if(!data) return;

                for(const oportunidade of data) {
                    const pedido = ConverterOportunidadeEmPedido({
                        cli_nome: oportunidade.person_id?.name,
                        item_codigo: oportunidade.id,
                        item_descricao: oportunidade.title,
                        item_quantidade: 1,
                        item_valor: oportunidade.value
                    });
    
                    const teste = ReduzirInformacoesDaOportunidade(oportunidade)
                    console.log(teste);
                }
            })
    }
}

module.exports = RegistrarOportunides;