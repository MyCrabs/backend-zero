const getHomepage = (req,res) => 
{
    res.send('Welldone!!! Duyy');
}
const getABCpage = (req,res) =>
{
    res.render('sample.ejs');
}
module.exports = {getHomepage, getABCpage} // Này là export dưới dạng Object (nhiều biến)