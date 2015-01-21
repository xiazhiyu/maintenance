function ServiceService($http, $rootScope, $location, APIURL){
   
    var list = function(success,error){
      $http.get(APIURL+'service/list').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };

    var getServiceById = function(id,success,error){
      $http.get(APIURL+'service/'+id).success(function(service){       
        success(service);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };
    
    var getEquipmentById = function(id,success,error){
      $http.get(APIURL+'equipment/'+id).success(function(entity){       
        success(entity);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };
    
    var updateService = function(service,success,error){
        $http.put(APIURL+'service/'+service.id,{
            service:service
        }).success(function(count){       
            console.log(count);
          }).error(function(msg){
            console.log("failed:"+msg);
            //error(msg);
          });
    };
    
    var updateServiceEquipment = function(id, equipmentId,success,error){
        $http({
            method: 'POST', 
            url: APIURL+'service/updateEquipment/',
            headers: {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
            data: $.param({id: id, equipmentId:equipmentId})
            }).
            success(function(equipment, status, headers, config) {
              success(equipment);
            }).
            error(function(data, status, headers, config) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        
    };
    var getEquipmentToCustomerInfoList = function(success,error){
      $http.get(APIURL+'equipment/listByCusutomer').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      });
    };
    
    return  {
        getEquipmentToCustomerInfoList:getEquipmentToCustomerInfoList,
        list: list,
        getServiceById: getServiceById,
        getEquipmentById:getEquipmentById,
        updateService:updateService,
        updateServiceEquipment:updateServiceEquipment
      };
  }