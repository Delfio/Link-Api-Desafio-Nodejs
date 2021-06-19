const { request } = require('https');
const FormatarUrl = require('../utils/FormatarUrlPipeDrive');


// Teste
const DEFAULT_URL = FormatarUrl('activities');


class BuscarUmaOportunidade {
    async Executar() {

        return new Promise((resolve, reject) => {
            const res = request(DEFAULT_URL, (resp) => {

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