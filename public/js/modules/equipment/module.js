/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var equipmentModule = angular.module('equipmentModule',[]);

equipmentModule.factory('equipmentService', ['$http','$rootScope','$location', 'APIURL',function($http,$rootScope,$location,APIURL) { 
  return new equipmentService($http, $rootScope, $location, APIURL); 
}]);  

equipmentModule.controller('equipmentController', ['$scope','equipmentService',equipmentController]); 
//equipmentModule.controller('customerDisplayController', ['$scope','customerService','$routeParams',customerDisplayController]);

