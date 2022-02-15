require("dotenv").config();

const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const port = process.env.PORT;
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//API Rutes
app.use(require("./routes/routes"));

//app.get('/saludo', (Request,response) => {
 //   response.send({data: "hola bienvenidos"})
//})
//BD
mongoose.connect(process.env.URI_DB)//revisar la uri en .env URI_DB
.then(() => console.log("se ha establecido la conexión con la base de datos"))
.catch(err => console.error(err));

//servidor
app.listen(3000, function () {
    console.log('escuchando por el puerto 3000!');
   });