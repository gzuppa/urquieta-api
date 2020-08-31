const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path")

const users = require("./routes/api/users");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Base de datos corriendo correctamente"))
  .catch(err => console.log(err));

//MIDDLEWARES

app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.post('/api/upload', (req, res) => {
  try {
    const fileStr = req.body.data
    console.log(fileStr)
  } catch(error) {
    console.error(error)
  }
})

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Servidor para Landing Urquieta corriendo en el puerto ${port} !`));