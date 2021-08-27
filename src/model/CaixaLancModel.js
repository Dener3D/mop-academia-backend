const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const CaixaLancSchema = new Schema({
   tipo : {type: String, required: true},
   valor: {type: String, required: true},
   data: {type: Date, default: Date.now()},
   obs: {type: String},
   usuario: {type: String}
});

module.exports = mongoose.model('CaixaLanc', CaixaLancSchema);