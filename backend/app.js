const express = require('express');
const app = express();
const port = 5500;
const path = require("path");
app.use(express.json());
const connectmongodb = require('./DB/mongoDb');
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const allRoutes = require('./routes/allRoutes')
app.use(allRoutes)
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin:'*'
  }))

async function start () {
    try{
       await connectmongodb();
        console.log(`listening on port ${port}`)
    }
    catch(error){
    console.log(error.message)
    }
}
start()

app.listen(port)