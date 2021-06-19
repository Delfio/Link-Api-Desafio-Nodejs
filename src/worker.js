const { parentPort } = require("worker_threads");
const Database = require("./database/connection");
const RegistrarOportunidades = require('./controllers/RegistrarOportunides');

new Database();

const registrarOportunidades = new RegistrarOportunidades();

async function recursive() {
    return registrarOportunidades.Executar()
}

parentPort.on('message', _ => {
    setInterval(async () => {
        await recursive()
            .then(() => {
                parentPort?.postMessage("finalizando ciclo")
            })
            .catch((err) => {
                parentPort?.postMessage(`erro no worker ! ${err.message}`)
                parentPort.close();

                process.exit();
            })
    }, 2000 * 60)
})

