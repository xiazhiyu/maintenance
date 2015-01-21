'use strict';

/* Directives */


angular.module('myApp.directives', ['ngRoute','ngCookies']).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('myNav', ['$rootScope',function($rootScope) {
    return {
        restrict: 'E',
        template: 
                $rootScope.auth?'<li><a href="'+$rootScope.auth.userId+'">'+$rootScope.auth.userId+'</a></li></ul>':'<ul><li><a>ログイン</a></li>',                
        replace: true      
    };
  }]).
  /*
  directive('needLogin',['$http','$route','$rootScope','$cookieStore','APIURL',function($http,$route,$rootScope,$cookieStore,APIURL) {
     
    return {
        restrict: 'E',
        scope: true,
        templateUrl:'partials/tpl/login.html',  
        link : function(scope){
            scope.login = function(user){
               
                $http({
                    method:"POST",
                    url: APIURL+'user/auth', 
                    data:{
                           email:user.email,
                            password: user.password
                        }
                }).success(function(auth, status, headers, config){
                    $rootScope.auth = auth;
                    $cookieStore.put("auth",auth);
                    $rootScope.needLogin = false;
                    $route.reload();
                }).error(function(data, status, headers, config){
                    console.log("err message",status);
                });  
            };
          
        },
        replace: true      
    };
  }]).
*/
  directive('listPref',['$http', 'APIURL',function($http,APIURL){
          return {
              restrict : 'E',
              scope: {selectModel: '='},
              template: '<select class="form-control" ng-model="selectModel" ng-options="item.name for item in list"></select>',
              replace : true,
              link : function(scope, elem, attrs){
                  $http.get(APIURL+'pref').success(function(list){ 
                    scope.list=list;
                    scope.selectModel = list[12];
                  }).error(function(msg){
                   console.log("failed:"+msg);
                 });  
              }
          };
  }])
  


;
