const AgrupamentoDeOportunidades = require('../../database/models/AgrupamentoDeOportunidades.model');

class BuscarUmAgrupamentoDeOportunidades{
    #AgrupamentoDeOportunidades;
    constructor() {
        this.#AgrupamentoDeOportunidades = AgrupamentoDeOportunidades
    }

    async Executar(dataFiltro = new Date()) {
        const startDay = new Date(dataFiltro).setHours(0, 0, 0, 0);
        const endDay = new Date(dataFiltro).setHours(23, 59, 59, 59);

        return this.#AgrupamentoDeOportunidades.findOne({
            "data": {
                "$gte": new Date(startDay),
                "$lt": new Date(endDay),
            }
        });
    }
}

module.exports = BuscarUmAgrupamentoDeOportunidades;