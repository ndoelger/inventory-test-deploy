const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productname: String,
  quantity: String,
  SKU: String
  
},{collection: 'inventoryitems'})

module.exports = mongoose.model('inventory', inventorySchema);