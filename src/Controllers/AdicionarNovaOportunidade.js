const OportunidadeEntity = require('../entities/Oportunidade');
const AppError = require('../utils/AppError');

class AdicionarNovaOportunidade {
    #agruparOportunidades;
    constructor({agruparOportunidades}){
        this.#agruparOportunidades = agruparOportunidades;
    }

    async Executar(oportunidade) {
        try {
            const Oportunidade = new OportunidadeEntity(oportunidade);

            const {error, valid} = Oportunidade.entidadeValida();

            if(!valid) {
                throw new AppError(`Parâmetrosd inválidos para adicionar uma nova oportunidade. ${error}`, 400);
            };

            this.#agruparOportunidades.Executar({oportunidade, data: new Date()})
        } catch(err) {

        }
    }
}

module.exports = AdicionarNovaOportunidade;