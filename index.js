require('dotenv/config');
require('./src/server')
const path = require('path');

const { Worker, isMainThread } = require('worker_threads');

if(isMainThread) {
    let worker = null;

    const pathWorker = path.resolve(__dirname, 'src', 'worker.js');

    worker = new Worker(pathWorker);

    worker.postMessage('start');

    worker.on('message', msg => console.log(`mensagem vinda do worker - ${msg}`))
    worker.on('error', err => console.log(`worker com erro ${err}`));
    worker.on('exit', _ => console.log('worker morto'));
    worker.on('messageerror', (er) => console.log(er))
}
