var express = require('express');
var Domain = require('./../models/Domain.js');

var router = express.Router();

/* GET domain listing. */
router.get('/', function(req, res) {
  console.log("Hello World1");
  res.render('partials/dataelement',function(err,html){
    console.log("ERR");
  });
});

router.get('/:name',function(req, res) {
 /* console.log(req);
  res.send('respond with a resource:'+req.params.name);
  */
  Domain.findByName(req.params.name,function(err, obj){
    if(obj){
      res.send(obj);
    }else{
      res.status(500).send('このエレメントが存在しません。');
    }   
  });  
 // 
})

router.post('/',function(req, res, next) {
  Domain.save(req.body,function(err,id){
  if(err){
      if(err == -1){
        res.status(500).send('同じIDのエレメントがすでに存在しています。');
      }else{
        res.status(500).send('保存を失敗しました。');
      }
    }else{
      res.send(id);
    }    
  }); 
})

router.put("/",function(req, res, next) {
  console.log("put");
  Domain.update(req.body,function(err,id){
      if(err){
          res.status(500).send('保存失敗しました。');
      }else{
          res.send(id);
      }    
  });
})

router.delete("/:_id",function(req,res,next){
  console.log("_id:"+req.params._id);

  Domain.deleteByeId(req.params._id, function(err){
    console.log(err);
    if(err){
      res.status(500).send('削除失敗しました。');
    }else{
      res.send("ok");
    }  
  });

})


module.exports = router;