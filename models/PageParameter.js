var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;

var PageParameterSchema = new Schema({
  pageurl : String,
  parameters : [
    { 
      name : String,
      index : Number
    }
  ]
});

var PageParameter = mongodb.mongoose.model("PageParameter", PageParameterSchema,"pageparameter");

var PageParameterDAO = function(){};

PageParameterDAO.prototype.findByPageurl = function(pageurl, callback) {
  PageParameter.findOne({pageurl: pageurl}, function(err, obj){
    // console.log("result:"+obj);
    // console.log("err:"+err);
    callback(err, obj.parameters);
  });
};

module.exports = new PageParameterDAO();