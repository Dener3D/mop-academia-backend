const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const CaixaSchema = new Schema({
   saldo : {type: Number, required: true},
});

module.exports = mongoose.model('Caixa', CaixaSchema);