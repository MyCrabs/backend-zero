const express = require('express');
const {getHomepage,getABCpage} = require('../controllers/homeController'); //import object - nhieu bien
const router = express.Router();

//router.method('/route',handler)
router.get('/',getHomepage);

router.get('/abc',getABCpage);

module.exports = router;
