function locationService($http, $rootScope, $location ,APIURL){
   
    var list = function(success,error){
      $http.get(APIURL+'location/list').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };

    var getCustomerById = function(id,success,error){
      $http.get(APIURL+'location/'+id).success(function(location){       
        success(location);
      }).error(function(msg){
        console.log("failed:"+msg);
      });
    };
    
    return  {      
        list: list,
        getCustomerById: getCustomerById
      };
  }