const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const ClientePlanoSchema = new Schema({
   cliente_id : {type: mongoose.Types.ObjectId, ref: "Cliente"},
   plano_id: {type: mongoose.Types.ObjectId, ref: "Plano"}, 
});

module.exports = mongoose.model('ClientePlano', ClientePlanoSchema);