/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function staffController($scope,staffService){
    //$scope.user = 'admin@xyjp.net';
    staffService.list(function(data){
        //console.log("list:",data);
        $scope.staffList = data;
    });
    
    
 
    $scope.gridOptions = { data: 'staffList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "", displayName: '',width: 80, pinned: true,  },
                    { field: "id", displayName: 'id',width: 80, visible: false,  },
                    { field: "staffNo", displayName: '担当者NO',width: 80, pinned: true, cellTemplate: '<div class="ngCellText colt{{$index}}"><a href="#/staff/{{row.entity.id}}">{{row.entity[col.field]}}</a></div>' },
                    { field: "name", displayName: '担当者名', width: 200 },
                    { field: "tel", displayName: '電話', width: 120 },
                    { field: "email1", displayName: 'E-mail', width: 210 },
                    { field: "email2", displayName: 'E-mail2', width: 210 },
                    { field: "comment", displayName: '摘要' }  
                ]

    };
  /*
  $scope.changeLoginOrRegister=function(){
    $scope.isRegister=!$scope.isRegister;
  }

  $scope.test = function(){
    userService.test(function(msg){
      console.log("test count:",msg);
    },function(msg){
      console.log("test failed",msg);
    });
  }


  $scope.userLogin = function(){    
    userService.login($scope.user,function(msg){
      console.log("userId",msg);
      $location.path('/');
    },function(msg){
      //alertFactory.showAlert("alert-error","ログイン失敗した");
      console.log("login failed",msg);
    })
  }

  $scope.userRegister = function(){
    userService.register($scope.user,function(msg){
      if(msg!='false'){
        $location.path('/bookCreate');
      }
    },
      function(msg){
       // alertFactory.showAlert("alert-error",msg);
      }
    )
  }*/

}


function serviceDisplayController($scope,serviceService,$routeParams){
    
   
  if($routeParams.id){
      serviceService.getServiceById($routeParams.id,function(data){
        $scope.service = data;
        console.log("test id",data);
      });
  }
 
}