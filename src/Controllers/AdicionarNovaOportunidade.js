const AgrupamentoDeOportunidades = require('../Database/schemas/AgrupamentoDeOportunidades');


class AdicionarNovaOportunidade {
    async Executar(oportunidade) {
        const startDay = new Date().setHours(0, 0, 0, 0);
        const endDay = new Date().setHours(23, 59, 59, 59);
        
        const query = {
            "data": {
                "$gte": new Date(startDay),
                "$lt": new Date(endDay),
            }
        }

        return AgrupamentoDeOportunidades.findOne(query).then(resu => {
            if(!resu) {
                const novaOportunidade = {
                    data: new Date(),
                    total: oportunidade.value,
                    contente: [oportunidade]
                }
                return AgrupamentoDeOportunidades.create(novaOportunidade)
            }

            resu.contente.push(oportunidade);
            resu.total = (resu.total + oportunidade.value);

            return resu.save();
        })
        
    }
}

module.exports = AdicionarNovaOportunidade;