//Import Express
const express = require("express");

//Object Express
const app = express();

//Middleware
app.use(express.json());

//Definisikan routes 
const router = require("./routes/api");
app.use(router);

//Definisikan port
app.listen(3000, () =>{
    console.log("Server running at http://localhost:3000")
});