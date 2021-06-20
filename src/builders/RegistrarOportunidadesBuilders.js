const RegistrarOportunidadesControllers = require('../controllers/RegistrarOportunides');
const FiltrarOportunidades = require("../services/http/FiltrarOportunidades");
const AgruparOportunidades = require("../services/database/AgruparOportunidades");
const AdicionarUmPedido = require("../services/http/AdicionarUmPedido");

module.exports = () => {
    const filtrarOportunidades = new FiltrarOportunidades();
    const agruparOportunidades = new AgruparOportunidades();
    const adicionarUmPedido = new AdicionarUmPedido();

    return new RegistrarOportunidadesControllers({
        adicionarUmPedido,
        agruparOportunidades,
        filtrarOportunidades
    })
}