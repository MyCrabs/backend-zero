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
const postCreateUser = (req,res) =>    //Sự kiện xảy ra khi nhấn button => post
{
    //let {email, name, city} = req.body;
    email = req.body.email;
    name = req.body.name;
    city = req.body.city;
    //console.log('>> email = ', email,'name = ' , myname,'city = ', city);

    connection.query(
        ` INSERT INTO Users (email,name,city)
        VALUES (?, ?, ?);`,
        [email, name,city],
        function(err, results) {
          console.log(results);
          res.send('create a new user succedded');
        }
      );
}
module.exports = {getHomepage, getABCpage, postCreateUser} // Này là export dưới dạng Object (nhiều biến)