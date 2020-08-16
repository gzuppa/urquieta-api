const express = require("express");

const app = express();

app.get('/', (req,res) => {
    res.send("API up")
})

app.listen(3000, () => {
    console.log("Servidor para Landing Urquieta corriendo")
})
