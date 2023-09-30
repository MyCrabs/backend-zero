const path = require('path');
const express = require('express');

const configviewEngine = (app) =>{
    //console.log('>>> check __dirname',__dirname);
    app.set('views',path.join('./src','views') );
    app.set('view engine','ejs');   
    //config static files:image,css,js
    app.use(express.static(path.join('./src','public')));
}

module.exports = configviewEngine; //Dùng để xuất 1 đối tượng js nhằm dùng trong các tệp js khác
