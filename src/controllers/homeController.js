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
module.exports = {getHomepage, getABCpage} // Này là export dưới dạng Object (nhiều biến)