const { parentPort } = require("worker_threads");
const Database = require("./database/connection");
const RegistrarOportunidadesBuilders = require('./builders/RegistrarOportunidadesBuilders');

new Database();

const registrarOportunidades = RegistrarOportunidadesBuilders();

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

