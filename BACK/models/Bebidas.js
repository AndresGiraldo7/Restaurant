const { Router } = require("express");
const mongoose = require("mongoose");
const customersSchema = mongoose.Schema({
    _id:String,
    Nombre:String,
    Cantidad:Intl,
    Precio:Decimal128

})
Router.get('/all',customerscontroller.getAll);
module.exports = Router;
module.exports = mongoose.model("bebidas",customersSchema);