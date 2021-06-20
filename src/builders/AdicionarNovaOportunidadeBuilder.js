const AgruparOportunidades = require('../services/database/AgruparOportunidades');
const AdicionarNovaOportunidadeController = require('../controllers/AdicionarNovaOportunidade');

module.exports = () => {
    const agruparOportunidades = new AgruparOportunidades();
    return new AdicionarNovaOportunidadeController({
        agruparOportunidades
    });
}
