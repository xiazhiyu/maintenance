/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var orderModule = angular.module('orderModule',[]);

orderModule.factory('orderService', ['$http','$rootScope','$location','APIURL', function($http,$rootScope,$location,APIURL) { 
  return new orderService($http, $rootScope, $location, APIURL); 
}]);  

orderModule.controller('customerController', ['$scope','orderService',orderController]); 

//ustomerModule.controller('customerDisplayController', ['$scope','customerService','$routeParams',customerDisplayController]);

