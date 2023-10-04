const express = require('express');
const {getHomepage,getABCpage, postCreateUser} = require('../controllers/homeController'); //import object - nhieu bien
const router = express.Router();

//router.method('/route',handler)
router.get('/',getHomepage);
router.get('/abc',getABCpage);

router.post('/create-user',postCreateUser);


module.exports = router;
