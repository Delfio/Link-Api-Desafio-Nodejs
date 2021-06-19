const ListarOportunidades = require("./controllers/ListarOportunidadesPorDia");
const AdicionarNovaOportunidade = require("./controllers/AdicionarNovaOportunidade");
const OportunidadeEntity = require("./entities/Oportunidade");
const Logger = require("./utils/Logger");

const DEFAULT_HEADER = { "Content-type": "application/json" };

function getOportunidades(req, res) {
  const listarOportunidades = new ListarOportunidades();
  const log = new Logger();

  const date = req.headers["date"]
    ? req.headers["date"]
    : new Date().toString();

  log.gravarLog(
    JSON.stringify({
      operacao: "Get Oportunidades",
      filtro: date,
    })
  );

  return listarOportunidades.Executar(date).then((result) => {
    res.write(JSON.stringify(result));
    res.end();
  });
}

function postOportunidade(req, res) {
  const data = [];
  const log = new Logger();

  req.on("data", (chunk) => data.push(chunk));

  req.on("end", () => {
    const body = JSON.parse(data.join(""));
    const oportunidade = new OportunidadeEntity(body);

    const { error, valid } = oportunidade.entidadeValida();

    if (!valid) {
      const errorFormated = error.join(", ");

      res.writeHead(400, DEFAULT_HEADER);
      res.write(JSON.stringify({ error: errorFormated }));

      res.end();

      log.gravarLog(
        JSON.stringify({
          operacao: "Post Oportunidades",
          error: errorFormated,
          data: body
        })
      );

      return;
    }

    const adicionarNovaOportunidade = new AdicionarNovaOportunidade();
    
    log.gravarLog(
        JSON.stringify({
          operacao: "Post Oportunidades",
          data: body
        })
      );
    return adicionarNovaOportunidade
      .Executar(body)
      .then(() => res.end())
      .catch((err) => {
        res.writeHead(400, DEFAULT_HEADER);
        res.write(
          JSON.stringify({
            error: err,
          })
        );
      });
  });
}

const routes = {
  "/oportunidades:get": getOportunidades,
  "/oportunidades:post": postOportunidade,
  default: (req, res) => {
    res.write("Hello !");
    res.end();
  },
};

module.exports = routes;
