require("dotenv/config");
require("./src/server");
const path = require("path");
const RegistrarLog = require("./src/utils/Logger");

const { Worker, isMainThread } = require("worker_threads");

if (process.env.NODE_ENV === "production") {
  if (isMainThread) {
    let worker = null;
    const registrarLog = new RegistrarLog();

    const pathWorker = path.resolve(__dirname, "src", "worker.js");

    worker = new Worker(pathWorker);

    worker.postMessage("start");

    worker.on("message", (msg) => {
      console.log(`mensagem vinda do worker - ${msg}`);
      registrarLog.gravarLog(
        JSON.stringify({
          operacao: `Realizando integração automática ${msg}`
        })
      );
    });

    worker.on("exit", (_) => {
      registrarLog.gravarLog(
        JSON.stringify({
          operacao: "Worker de integração finalizado",
          data: new Date().toLocaleDateString(),
        })
      );
    });

    worker.on("messageerror", (er) => console.log(er));
  }
}
