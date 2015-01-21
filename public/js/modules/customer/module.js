/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var customerModule = angular.module('customerModule',[]);

customerModule.factory('customerService', ['$http','$rootScope','$location','APIURL', function($http,$rootScope,$location,APIURL) { 
  return new customerService($http, $rootScope, $location, APIURL); 
}]);  

customerModule.controller('customerController', ['$scope','customerService','commonToolService',customerController]); 
customerModule.controller('customerCreateController', ['$scope','customerService','commonToolService','parameters',customerCreateController]); 

//ustomerModule.controller('customerDisplayController', ['$scope','customerService','$routeParams',customerDisplayController]);

