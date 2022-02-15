
const express = require("express");
const exampleController = require("../controller/exampleController")
const customerscontroller = require("../controller/customerscontroller")
const router = express.Router();
// Rutes

router.get('/', exampleController.entrada);
router.get('/saludo',exampleController.saludar);

router.get('/all',customerscontroller.getAll);


module.exports=router;