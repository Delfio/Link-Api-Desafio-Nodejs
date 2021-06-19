const BuscarUmAgrupamentoDeOportunidades = require('../services/BuscarUmAgrupamentoDeOportunidades');
const AppError = require('../utils/AppError');

class ListOportunidadesPorDia {
    async Executar(dataFiltro) {

        const buscarUmAgrupamentoDeOportunidades = new BuscarUmAgrupamentoDeOportunidades();

        try{
            return buscarUmAgrupamentoDeOportunidades.Executar(dataFiltro);
        } catch(err) {
            throw new AppError(`Erro ao filtrar as oportunidades ${err.message}`, 400);
        }
    }
}

module.exports = ListOportunidadesPorDia;