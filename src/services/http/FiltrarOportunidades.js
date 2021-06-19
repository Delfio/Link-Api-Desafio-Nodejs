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
                    if(response.statusCode > 300) {
                        reject(ch.toString())
                    } else {
                        data.push(ch);
                    } 
                    
                });
                
                response.on('close', () => {
                    const body = JSON.parse(data.join(''));

                    if(!body.data){
                        resolv(null);
                    } else {
                        
                        const bodyFormatado = Array.from(body.data).map(el => {
                            const {
                                id,
                                creator_user_id,
                                user_id,
                                person_id,
                                org_id,
                                stage_id,
                                title,
                                value,
                                currency,
                                add_time,
                                active,
                                deleted,
                                status,
                                pipeline_id,
                                products_count
                            } = el;

                            return {
                                id,
                                creator_user_id: creator_user_id.id,
                                user_id: user_id.id,
                                person_id: person_id.owner_id,
                                org_id: org_id.owner_id,
                                stage_id,
                                title,
                                value,
                                currency,
                                add_time,
                                active,
                                deleted,
                                status,
                                pipeline_id,
                                products_count
                            }
                        })
    
                        resolv(bodyFormatado)
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