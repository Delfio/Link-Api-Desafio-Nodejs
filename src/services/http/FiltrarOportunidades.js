const FormatUrl = require('../../utils/FormatarUrlPipeDrive');
const { request } = require('https');

class FiltrarOportunidades {
    #URL
    constructor() {
        this.#URL = new URL(FormatUrl('deals'));
    }

    async Executar({
        businessStatus = "won"
    }) {
        return new Promise((resolv, reject) => {
            this.#URL.searchParams.append('status', businessStatus);

            const requisicao = request(this.#URL, (response) => {
                const data = [];
                response.on('data', ch => {
                    data.push(ch);
                });
                
                response.on('close', () => {
                    const body = JSON.parse(data.join(''));

                    if(response.statusCode > 300) {
                        reject(body);
                    } else {
                        resolv(body);
                    }
                })

                response.on('error', (err) => {
                    console.log('erro ', err);
                    reject(err)
                })
            });

            requisicao.end();
        })
    }
}

module.exports = FiltrarOportunidades;