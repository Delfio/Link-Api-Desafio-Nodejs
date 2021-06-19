const FormatarUrlBling = require('../../utils/FormatarUrlBling');
const { request } = require('https');

class AdicionarUmPedido {
    #URL;
    constructor() {
        this.#URL = new URL(FormatarUrlBling('pedido'));
    }

    async Executar(data) {
        return new Promise((resolv, reject) => {
            const urlFormatada = this.#URL.searchParams.set('xml', data);

            
        })
    }
}