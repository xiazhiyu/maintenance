/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var dataElementModule = angular.module('dataElementModule',[]);

dataElementModule.factory('dataElementService', ['$http','$rootScope','$location','NODEURL', function($http,$rootScope,$location,NODEURL) { 
  return new dataElementService($http, $rootScope, $location, NODEURL); 
}]);  

dataElementModule.controller('dataElementController', ['$scope','$rootScope','$location','dataElementService','pageParameterService',dataElementController]); 
// dataElementModule.controller('dataElementCreateController', ['$scope','dataElementService','pageParameterService',dataElementCreateController]); 

