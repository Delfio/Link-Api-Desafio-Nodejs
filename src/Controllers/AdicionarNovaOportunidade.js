const TesteSchema = require('../Database/schemas/Oportunidades');

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

        return TesteSchema.findOne(query).then(resu => {
            if(!resu) {
                const newTeste = {
                    data: new Date(),
                    total: oportunidade.value,
                    contente: [oportunidade]
                }
                return TesteSchema.create(newTeste)
            }

            resu.contente.push(oportunidade);
            resu.total = (resu.total + oportunidade.value);

            return resu.save();
        })
        
    }
}

module.exports = AdicionarNovaOportunidade;