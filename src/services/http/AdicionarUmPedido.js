const BaseURLBling = require('../../utils/FormatarUrlBling');

class AdicionarUmPedido {

    async Executar(data) {
        return BaseURLBling.post('/pedido', null, {
            params: {
                xml: data
            }
        })
    }
}

module.exports = AdicionarUmPedido;
