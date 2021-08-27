const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const PlanoSchema = new Schema({
   nome : {type: String, required: true},
   desc: {type: String, required: true},
   preco: {type: Number, required: true},
});

module.exports = mongoose.model('Plano', PlanoSchema);