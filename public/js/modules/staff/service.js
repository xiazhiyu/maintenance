function staffService($http, $rootScope, $location, APIURL){
   
    var list = function(success,error){
      $http.get(APIURL+'staff/list').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
        //error(msg);
      })
    };

    var getStaffById = function(id,success,error){
      $http.get(APIURL+'staff/'+id).success(function(staff){       
        success(staff);
      }).error(function(msg){
        console.log("failed:"+msg);
      })
    };
    
    return  {      
        list: list,
        getStaffById: getStaffById
      };
  }