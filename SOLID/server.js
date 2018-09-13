'use strict';

const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const express= require("express");

mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.json());


app.get('/', (req,res,next) => {
    res.sendFile(__dirname +'/public/index.html');
});

app.listen(3000,function(){
    console.log("con");
});