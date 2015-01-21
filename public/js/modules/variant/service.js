function variantService($http, $rootScope, $location,NODEURL){
   
    var list = function(success,error){
      $http.get(NODEURL+'domain/contype').success(function(list){       
        success(list);
      }).error(function(msg){
        console.log("failed:"+msg);
      });
    };

    var getElementByName = function(name,success,error){
      $http.get(NODEURL+'api/domain/'+name).success(function(data){ 
        success(data); 
      }).error(function(msg){
        alert(msg);
      });
    };

    var saveElement = function(element,mode,success,error){
      console.log(element);
      console.log(mode);
      if(mode == 1){
        $http.post(NODEURL+'api/domain',element).success(function(data){ 
          $rootScope.addAlert("success","保存完了しました。");    
          success(data);
        }).error(function(msg){
          $rootScope.addAlert("danger",msg);
        });
      }else if(mode == 2){
        $http.put(NODEURL+'api/domain',element).success(function(data){ 
          // $rootScope.addAlert("success","保存完了しました。");    
          success(data);
        }).error(function(msg){
          $rootScope.addAlert("danger",msg);
        });
      }   
    };

    var deleteElement = function(_id,success,error){
      
      $http.delete(NODEURL+'api/domain/'+_id).success(function(data){
        //$rootScope.addAlert("success","削除完了しました。");    
        success(data);
      }).error(function(msg){
        console.log(msg);
      })
    }

    // var testPost = function(title, success, error){
    //   var req = {
    //     method: 'POST',
    //     url: 'http://localhost:5000/todo/tasks',
    //     headers: {
    //      'Content-Type': 'application/json'
    //     },
    //     data: { title: title },
    //   }
    //   $http(req).success(function(data){       
    //     success(data);
    //   }).error(function(msg){
    //     console.log("failed:"+msg);
    //   });
    // }
    
    return  {      
        list: list,
        getElementByName: getElementByName,
        saveElement: saveElement,
        deleteElement: deleteElement
      };
  }