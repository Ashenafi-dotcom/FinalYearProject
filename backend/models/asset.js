const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: String,
  status: { type: String, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Asset', assetSchema);
