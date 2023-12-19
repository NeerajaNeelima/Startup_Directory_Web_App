const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  srNo: Number,
  date: String,
  startupName: String,
  industryVertical: String,
  subVertical: String,
  cityLocation: String,
  investorsName: String,
  investmentType: String,
  amountInUSD: String,
});

const Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;
