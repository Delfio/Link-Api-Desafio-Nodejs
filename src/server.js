const { createServer } = require("http");
const Connection = require("./Database/connection");
const routes = require('./routes');

/**
 * get /oportunidades -> all
 *      headers :
 *          date: data de filtro
 *          from: 0
 *          at: 50
 *
 */

new Connection();

const PORT = process.env.PORT || 3333;
const DEFAULT_HEADER = { "Content-type": "application/json" };


const handle = async (request, response) => {
  const { url, method } = request;

  const key = `${url}:${method.toLowerCase()}`;
  const chosen = routes[key] || routes["default"];

  response.writeHead(200, DEFAULT_HEADER);
  return chosen(request, response);
};

const server = createServer((req, res) => handle(req, res));

server.listen(PORT, () => console.log(`Servidor no ar na porta ${PORT} 🎉`));
