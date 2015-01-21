/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var itemModule = angular.module('itemModule',[]);

itemModule.factory('itemService', ['$http','$rootScope','$location','APIURL', function($http,$rootScope,$location,APIURL) { 
  return new itemService($http, $rootScope, $location,APIURL); 
}]);  

itemModule.controller('itemController', ['$scope','itemService',itemController]); 
//equipmentModule.controller('customerDisplayController', ['$scope','customerService','$routeParams',customerDisplayController]);

