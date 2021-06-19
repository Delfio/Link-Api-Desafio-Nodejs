const TesteSchema = require('../Database/schemas/Oportunidades');

class ListOportunidadesPorDia {
    async Executar(dia = new Date()) {
        const startDay = new Date(dia).setHours(0, 0, 0, 0);
        const endDay = new Date(dia).setHours(23, 59, 59, 59);

        return TesteSchema.findOne({
            "data": {
                "$gte": new Date(startDay),
                "$lt": new Date(endDay),
            }
        });
    }
}

module.exports = ListOportunidadesPorDia;