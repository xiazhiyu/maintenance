function customerService($http, $rootScope, $location,APIURL){
   
    var list = function(success,error){
      $http.get(APIURL+'customer/list').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };

    var getCustomerById = function(id,success,error){
      $http.get(APIURL+'customer/'+id).success(function(customer){       
        success(customer);
      }).error(function(msg){
        console.log("failed:"+msg);
      });
    };
    
    return  {      
        list: list,
        getCustomerById: getCustomerById
      };
  }