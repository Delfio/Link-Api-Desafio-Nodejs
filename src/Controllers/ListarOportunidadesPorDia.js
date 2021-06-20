const AppError = require('../utils/AppError');

class ListOportunidadesPorDia {
    #buscarUmAgrupamentoDeOportunidades;

    constructor({buscarUmAgrupamentoDeOportunidades}) {
        this.#buscarUmAgrupamentoDeOportunidades = buscarUmAgrupamentoDeOportunidades;
    }

    async Executar(dataFiltro) {

        try{
            return this.#buscarUmAgrupamentoDeOportunidades.Executar(dataFiltro);
        } catch(err) {
            throw new AppError(`Erro ao filtrar as oportunidades ${err.message}`, 400);
        }
    }
}

module.exports = ListOportunidadesPorDia;