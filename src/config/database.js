const mongoose = require("mongoose");
require('dotenv').config();

const url = "mongodb_url"
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;

