const express = require('express');//commonjs
const path = require('path');
require('dotenv').config();
//import express from 'express'; //es modules

const app = express();
const port = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME || 'localhost';

//app.set('views','./views');
app.set('views',path.join(__dirname,'views') );
app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.send('Welldone!!!');
})

app.get('/abc',(req,res)=>{
    //res.send('<h1>Welldone!!! ThanhDuy</h1>');
    res.render('sample.ejs');
})

app.listen(port,hostname, ()=>{
    console.log(`Example listening on port ${port} and ${hostname}`);
})