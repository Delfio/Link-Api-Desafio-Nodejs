const mongoose = require('mongoose');

class Database {
    #Connection;
    constructor() {
        this.#configMongo();
    }

    async #configMongo() {
        this.#Connection = mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    };


}

module.exports = Database;