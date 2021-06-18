const TesteSchema = require('../Database/schemas/Oportunidades');

class AdicionarNovaOportunidade {
    async Executar(oportunidade) {
        const dataAtual = new Date().setHours(0,0,0,0);
        
        const query = {
            "data": {
                "$gte": new Date(startDay),
                "$lt": new Date(endDay),
            }
        }

        return TesteSchema.findOne(query).then(resu => {
            if(!resu) {
                const newTeste = {
                    data: new Date(dataAtual),
                    total: value,
                    contente: [...oportunidade]
                }
                return TesteSchema.create(newTeste)
            }

            resu.contente.push(oportunidade);

            resu.total = (resu.total + value);
        })
        
    }
}

module.exports = AdicionarNovaOportunidade;