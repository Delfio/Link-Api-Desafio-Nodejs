const BuscarUmAgrupamentoDeOportunidades = require('../services/database/BuscarUmAgrupamentoDeOportunidades');
const ListarOportunidadesControllers = require('../controllers/ListarOportunidadesPorDia');

module.exports = () => {
    const buscarUmAgrupamentoDeOportunidades = new BuscarUmAgrupamentoDeOportunidades();
    
    return new ListarOportunidadesControllers({
        buscarUmAgrupamentoDeOportunidades
    });


}
