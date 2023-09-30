require('dotenv').config();
const express = require('express');//commonjs
const path = require('path');
const configviewEngine = require('./config/viewEnigine');
const webRouter = require('./routes/web');
//import express from 'express'; //es modules

const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME || 'localhost';

//config template engine
configviewEngine(app);
app.use('/hihi',webRouter);


app.listen(port,hostname, ()=>{
    console.log(`Example listening on port ${port} and ${hostname}`);
})