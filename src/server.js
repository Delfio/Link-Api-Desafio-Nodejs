const { createServer } = require('http');
const ListarOportunidades = require('./Controllers/ListarOportunidadesPorDia');
const Connection = require('./Database/connection');
/**
 * get / -> all
 *      headers :
 *          date: data de filtro
 *          from: 0
 *          at: 50
 */


new Connection();

const PORT = process.env.PORT || 3333;

const ab = new ListarOportunidades();

const handle = async (request, response) => {
    const {date, from, to} = request.headers;

    ab.test().then(el => console.log(el));

    console.log(date, from, to)

    const res = {
        ok: true
    };

    response.write(JSON.stringify(res));

    response.end();

}

const server = createServer((req, res) => handle(req, res));

server.listen(PORT, () => console.log(`Servidor no ar na porta ${PORT} 🎉`));
