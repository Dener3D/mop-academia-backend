const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
   nome : {type: String, required: true},
   cpf: {type: String, required: true},
   endereco: {type: String, required: true},
   data_nascimento: {type: Date, required: true},
   telefone: {type: String, required: true},
   email: {type: String, required: true},
   status: {type: String, required: true, default: 'A'},
   dia_pagamento: {type: Number, required: true}
});

module.exports = mongoose.model('Cliente', ClienteSchema);