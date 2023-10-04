const connection = require('../config/database');
const getHomepage = (req,res) => 
{
    return res.render('homepage.ejs');
}
const getABCpage = (req,res) =>
{
    res.render('sample.ejs');
    //res.send('ABC test');
}
const postCreateUser = (req,res) =>{
    console.log('>>>> req.body',req.body);
    res.send('create a new user');
}
module.exports = {getHomepage, getABCpage, postCreateUser} // Này là export dưới dạng Object (nhiều biến)