'use strict';

/*
if (Function('/*@cc_on return document.documentMode===10@*/
/*')()){
    //document.documentElement.className+=' ie10';
 /*   alert(10);
}
*/

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngGrid',
  'userModule',
  'serviceModule',
  'customerModule',
  'dataElementModule',
  'variantModule',
  'locationModule',
  'staffModule',
  'equipmentModule',
  'itemModule',
  'ui.bootstrap'
])
.constant(
        /*
        MYCONSTANT,{
            'APIURL':"../api/",
            'IEVERSION':"../api/",
            
    }*/
     'APIURL',"../api/"            
).constant(
    'NODEURL',"http://localhost:3000/"
)
/*.        
config(function($httpProvider){
    $httpProvider.interceptors.push('myHttpInterceptor');
})*/.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/tpl/login.html', controller: 'userController'});
  $routeProvider.when('/service', {templateUrl: 'partials/service/index.html', controller: 'serviceController'});
  $routeProvider.when("/service/:id", {templateUrl: 'partials/service/display.html', controller: 'serviceDisplayController'});
  $routeProvider.when('/order/create', {templateUrl: 'partials/order/create.html', controller: 'orderCreateController'});
  $routeProvider.when('/customer', {templateUrl: 'partials/customer/index.html', controller: 'customerController'});
  $routeProvider
    .when('/customer/create', {
        templateUrl: 'partials/customer/edit.html', 
        controller: 'customerCreateController', 
        resolve: {
              parameters: 
              function(pageParameterService){
                return pageParameterService.getParameters("customer.create");
              }
        }
      });
  $routeProvider.when('/customer/:id', {templateUrl: 'partials/customer/display.html', controller: 'customerDisplayController'});
  $routeProvider.when('/staff', {templateUrl: 'partials/staff/index.html', controller: 'staffController'});
  $routeProvider.when('/location', {templateUrl: 'partials/location/index.html', controller: 'locationController'});
  $routeProvider.when('/equipment', {templateUrl: 'partials/equipment/index.html', controller: 'equipmentController'});
  $routeProvider.when('/item', {templateUrl: 'partials/item.html', controller: 'itemController'});
  $routeProvider.when('/config/variant',{templateUrl: 'partials/variant/index.html', controller: 'variantController'});
  $routeProvider.when('/config/variant/create',{templateUrl: 'partials/variant/create.html', controller: 'variantSaveController'});
  $routeProvider.when('/config/dataelement',{templateUrl: 'partials/dataelement/index.html', controller: 'dataElementController'});
  $routeProvider.when('/config/dataelement/create',{templateUrl: 'partials/dataelement/create.html', controller: 'dataElementSaveController'});
  $routeProvider.when('/config/dataelement/:name',{templateUrl: 'partials/dataelement/create.html', controller: 'dataElementSaveController'});
  $routeProvider.otherwise({redirectTo: 'config/dataelement'});

}]).run(function($rootScope){
  $rootScope.helpMode = false;
  $rootScope.changeHepMode = function(){
    if(!$rootScope.helpMode){
      $("input").css("cursor","help");
      $rootScope.helpMode = true;
    }else{
      $("input").css("cursor","");
      $rootScope.helpMode = false;
    }
  };

  $rootScope.getHelp = function(helpId){
    if($rootScope.helpMode){
      alert("helpMode:"+helpId);
      $("input").css("cursor","");
      $rootScope.helpMode = false;
    }
  };

  $rootScope.alerts = [
    // {type:'danger', msg:'Oh snap! Change a few things up and try submitting again.'},
    // {type:'success', msg:'Well done! You successfully read this important alert message.'}
  ];

  $rootScope.addAlert = function(type,msg) {
    $rootScope.alerts.push({type: type, msg: msg});
  };

  $rootScope.closeAlert = function(index) {
    $rootScope.alerts.splice(index, 1);
  };

});
