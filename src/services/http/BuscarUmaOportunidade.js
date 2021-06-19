const { request } = require('https');
const FormatarUrl = require('../utils/FormatarUrlPipeDrive');

class BuscarUmaOportunidade {
    #DEFAULT_URL;
    constructor() {
        this.#DEFAULT_URL = FormatarUrl('activities');
    }
    async Executar() {
        return new Promise((resolve, reject) => {
            const res = request(this.#DEFAULT_URL, (resp) => {

                resp.on('data', ch => {
                    if(resp.statusCode > 300) {
                        reject(ch.toString())
                    } else {
                        resolve(ch.toString())
                    } 
                    
                });
            
                resp.on('error', (err) => {
                    console.log('erro ', err);
                    reject(err)
                })
            });
            
            res.end();
        })
    }
}



module.exports = BuscarUmaOportunidade