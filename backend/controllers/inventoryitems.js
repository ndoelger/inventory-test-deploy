const inventory = require('../models/inventoryitem');

module.exports = {
    getAll

}

async function getAll(req, res){
    await inventory.find();
    console.log(inventory);
    //res.json(inventory);
}