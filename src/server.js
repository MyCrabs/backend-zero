require('dotenv').config();
const express = require('express');//commonjs
const configviewE = require('./config/viewEnigine');//config template engine
const webRouter = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 3001;  
const hostname = process.env.HOST_NAME || 'localhost';

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended : true})); //Parse URL-encoded bodies

configviewE(app);
app.use('',webRouter);//Dùng để chia route


app.listen(port,hostname, ()=>{
    console.log(`Example listening on port ${port} and ${hostname}`);
})
