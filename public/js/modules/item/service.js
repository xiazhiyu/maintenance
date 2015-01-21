function itemService($http, $rootScope, $location, APIURL){
   
    var list = function(success,error){
      $http.get(APIURL+'item/list').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };

    var getItemById = function(id,success,error){
      $http.get(APIURL+'item/'+id).success(function(customer){       
        success(customer);
      }).error(function(msg){
        console.log("failed:"+msg);
      });
    };
    
    return  {      
        list: list,
        getItemById: getItemById
      };
  }