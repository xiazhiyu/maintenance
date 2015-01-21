/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var staffModule = angular.module('staffModule',[]);

staffModule.factory('staffService', ['$http','$rootScope','$location','APIURL', function($http,$rootScope,$location, APIURL) { 
  return new staffService($http, $rootScope, $location, APIURL); 
}]);  

staffModule.controller('staffController', ['$scope','staffService',staffController]); 

