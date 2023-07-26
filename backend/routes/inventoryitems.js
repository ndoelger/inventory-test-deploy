var express = require("express");
var router = express.Router();
inventoryCtrl = require('../controllers/inventoryitems')
const inventory = require('../models/inventoryitem');

//get all items
router.get('/', inventoryCtrl.getAll);

//get one item
router.get('/:id', inventoryCtrl.show);

//add new
router.post('/new', inventoryCtrl.new);

//update
router.put("/:id/update", inventoryCtrl.update);

//delete
router.delete("/:id", inventoryCtrl.delete);


//get all
// router.get("/", async (req, res) => {

// 	try {
//         // get all items
//         res.json(await inventory.find({}));
//       } catch (error) {
//         //send error
//         res.status(400).json(error);
//       }
// })


//get one
// router.get("/:id", async (req, res) => {
//     try {
//         // send one item
//         console.log(req.params.id);
//         res.json(await inventory.findById(req.params.id));
//       } catch (error) {
//         //send error
//         res.status(400).json(error);
//       }
// });

//insert
// router.post("/", async (req, res) => {
//     try {
//       // create new item
//       res.json(await inventory.create(req.body));
//     } catch (error) {
//       //send error
//       res.status(400).json(error);
//     }
//   });


//update
// router.put("/:id", async (req, res) => {
//     try {
//       // update item by ID
//       res.json(
//         await inventory.findByIdAndUpdate(req.params.id, req.body, {new:true})
//       );
//     } catch (error) {
//       //send error
//       res.status(400).json(error);
//     }
//   });
  
//delete
//   router.delete("/:id", async (req, res) => {
//     try {
//       // delete item by ID
//       res.json(await inventory.findByIdAndRemove(req.params.id));
//     } catch (error) {
//       //send error
//       res.status(400).json(error);
//     }
//   });


module.exports = router;