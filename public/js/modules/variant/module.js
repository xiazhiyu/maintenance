/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var variantModule = angular.module('variantModule',[]);

variantModule.factory('variantService', ['$http','$rootScope','$location','NODEURL', function($http,$rootScope,$location,NODEURL) { 
  return new variantService($http, $rootScope, $location, NODEURL); 
}]);  

variantModule.controller('variantController', ['$scope','$rootScope','$location','variantService','dataElementService','pageParameterService',variantController]); 

