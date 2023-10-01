const connection = require('../config/database');
const getHomepage = (req,res) => 
{
    let users = [];
    connection.query(
        'select * from Users u',
        function(err, results, fields) {
          users = results;
          console.log('>>>"result home page = "',results); // results contains rows returned by server
          console.log('>>>check users: ',users); 
          res.send(JSON.stringify(users));
        }
      );
}
const getABCpage = (req,res) =>
{
    res.render('sample.ejs');
    //res.send('ABC test');
}
module.exports = {getHomepage, getABCpage} // Này là export dưới dạng Object (nhiều biến)