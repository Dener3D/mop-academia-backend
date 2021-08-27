const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PagamentoSchema = new Schema({
   cliente_id : {type: Schema.Types.ObjectId, ref: "Cliente"},
   ref: {type: String, required: true},
   status: {type: String, required: true},
   data_pagamento: {type: Date},
});

module.exports = mongoose.model('Pagamento', PagamentoSchema);