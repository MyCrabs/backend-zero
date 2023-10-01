require('dotenv').config();
const express = require('express');//commonjs
const configviewE = require('./config/viewEnigine');//config template engine
const webRouter = require('./routes/web');
const mysql = require('mysql2')

const app = express();
const port = process.env.PORT || 3001;  
const hostname = process.env.HOST_NAME || 'localhost';

configviewE(app);
app.use('',webRouter);//Dùng để chia route

//test connection
const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, //default : 3306
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
);
//simple querry
connection.query(
    'SELECT * FROM Users u',
    function(err, results, fields) {
      console.log('>>>"result = "',results); // results contains rows returned by server
      //console.log(">>>>>fields = ",fields); // fields contains extra meta data about results, if available
    }
  );

app.listen(port,hostname, ()=>{
    console.log(`Example listening on port ${port} and ${hostname}`);
})
