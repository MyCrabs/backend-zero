require('dotenv').config();
const express = require('express');//commonjs
const path = require('path');
const configviewEngine = require('./config/viewEnigine');//config template engine
const webRouter = require('./routes/web');
//import express from 'express'; //es modules

const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME || 'localhost';

configviewEngine(app);
app.use('',webRouter);//Dùng để chia route


app.listen(port,hostname, ()=>{
    console.log(`Example listening on port ${port} and ${hostname}`);
})