const mongoose = require('mongoose');

const OportunidadeSchema = require('../schemas/Oportunidade.schema');

module.exports = mongoose.model('Oportunidade', OportunidadeSchema);
