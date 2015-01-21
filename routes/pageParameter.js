var express = require('express');
var PageParameter = require('./../models/PageParameter.js');
var router = express.Router();


/* GET users listing. */
router.get('/:pageurl', function(req, res) {
  // res.send('respond with a resource');
  // console.log("page");
   PageParameter.findByPageurl(req.params.pageurl,function(err, obj){
    res.send(obj);
  }); 
});

module.exports = router;
