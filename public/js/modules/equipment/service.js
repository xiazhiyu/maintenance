function equipmentService($http, $rootScope, $location,APIURL){
   
    var list = function(success,error){
      $http.get(APIURL+'equipment/list').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      })
    };

    var getEquipmentById = function(id,success,error){
      $http.get(APIURL+'equipment/'+id).success(function(customer){       
        success(customer);
      }).error(function(msg){
        console.log("failed:"+msg);
      })
    };
    
    return  {      
        list: list,
        getEquipmentById: getEquipmentById
      };
  }