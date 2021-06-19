const AgrupamentoDeOportunidadesModel = require('../../database/models/AgrupamentoDeOportunidades.model');
const OportunidadeModel = require('../../database/models/Oportunidade.model');

class AgruparOportunidades {
    #AgrupamentoDeOportunidades;
    #Oportunidade;
    constructor() {
        this.#Oportunidade = OportunidadeModel;
        this.#AgrupamentoDeOportunidades = AgrupamentoDeOportunidadesModel;
    }

    async Executar({oportunidade, data}) {
        const novaOportunidade = new this.#Oportunidade(oportunidade);

        const startDay = new Date(data).setHours(0, 0, 0, 0);
        const endDay = new Date(data).setHours(23, 59, 59, 59);
        
        const query = {
            "data": {
                "$gte": new Date(startDay),
                "$lt": new Date(endDay),
            }
        }

        return this.#AgrupamentoDeOportunidades.findOne(query).then(resu => {
            if(!resu) {
                const novoAgrupamento = {
                    data: new Date(),
                    total: oportunidade.value,
                    contente: [novaOportunidade]
                }
                return this.#AgrupamentoDeOportunidades.create(novoAgrupamento)
            }

            resu.contente.push(oportunidade);
            resu.total = (resu.total + oportunidade.value);

            return resu.save();
        })
    }
};

module.exports = AgruparOportunidades;
