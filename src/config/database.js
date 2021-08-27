const mongoose = require("mongoose");
require('dotenv').config();

const url = "mongodb+srv://admin:den159456123@cluster0.ix1vv.mongodb.net/academia?retryWrites=true/"
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;

