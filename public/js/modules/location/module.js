/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var locationModule = angular.module('locationModule',[]);

locationModule.factory('locationService', ['$http','$rootScope','$location', 'APIURL',function($http,$rootScope,$location,APIURL) { 
  return new locationService($http, $rootScope, $location,APIURL); 
}]);  

locationModule.controller('locationController', ['$scope','locationService',locationController]); 

//ustomerModule.controller('locationDisplayController', ['$scope','locationService','$routeParams',locationDisplayController]);

