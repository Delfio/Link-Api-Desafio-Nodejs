const mongoose = require('mongoose');
const {OportunidadeSchema} = require('./Oportunidade');

const TesteSchema = new mongoose.Schema({
    data: {
        type: Date,
        require: true,
    },
    total: {
        type: Number,
        default: 0
    },
    contente: [OportunidadeSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('OportunidadesAgrupadas', TesteSchema);