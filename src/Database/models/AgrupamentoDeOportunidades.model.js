const mongoose = require('mongoose');

const AgrupamentoDeOportunidadesSchema = require('../schemas/AgrupamentoDeOportunidades.schema');

module.exports = mongoose.model('OportunidadesAgrupadas', AgrupamentoDeOportunidadesSchema);