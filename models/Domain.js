var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var DomainSchema = new Schema({
  name : String,
  text1 : String,
  type : String,
  lenth : Number,
  list : []
});

var Domain = mongodb.mongoose.model("Domain", DomainSchema,"domain");

var DomainDAO = function(){};

DomainDAO.prototype.findByName = function(name, callback) {
   console.log("name:"+name);
   /*
   var krouky = new Domain({name: 'test',type: 'ttttypes'});
    krouky.save(function(err, obj, numberAffected){
      console.log("result:"+obj);
      console.log("err:"+err);
    });
   */
  Domain.findOne({name: name}, function(err, obj){
    console.log("result:"+obj);
    console.log("err:"+err);
    callback(err, obj);
  });
};

DomainDAO.prototype.deleteByeId = function(_id, callback) {
  Domain.findByIdAndRemove(_id, function(err){
    callback(err);
  });
};


DomainDAO.prototype.save = function(element, callback){  
  Domain.find({name: element.name},function(err,docs){
    if(docs.length){
       callback(-1);
    }else{
      var domain = new Domain(element);
      domain.save(function(err,_id){
        callback(err,_id);
      });
    }
  }); 
}

DomainDAO.prototype.update = function(element, callback){  
  var _id = element._id;
  delete element._id; 
  Domain.update({_id: _id}, element,function(err){
    callback(err);
  });
}


module.exports = new DomainDAO();