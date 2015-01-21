/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function userController($scope,userService,$location){
  //$scope.user = 'admin@xyjp.net';
  $scope.isRegister = false;
  
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


  $scope.userLogin = function(user){    
    userService.login(user,function(msg){
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
  }

}