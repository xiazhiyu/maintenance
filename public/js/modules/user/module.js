/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var userModule = angular.module('userModule',[]);

userModule.factory('userService', ['$http','$rootScope','$location','$cookieStore', 'APIURL', function($http,$rootScope,$location,$cookieStore, APIURL) { 
  return new UserService($http, $rootScope, $location,$cookieStore, APIURL); 
}]);  

userModule.controller('userController', ['$scope','userService','$location','$filter',userController]); 


