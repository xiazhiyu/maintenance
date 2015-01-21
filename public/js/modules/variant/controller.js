/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function variantController($scope,$rootScope,$location,dataElementService,variantService, pageParameterService){

    $scope.createByName = function(){
        pageParameterService.shareData = {variant: {name:$scope.name}, mode: 1};
        $location.path("config/variant/create");
    };

    $scope.editByName = function(){
        dataElementService.getVariantByName($scope.name,function(data){
            if(data){
              pageParameterService.shareData = {variant : data, mode : 2};  
              $location.path("config/variant/"+data.name);
            } 
        });    
    };
}

function variantSaveController($scope, $rootScope,$location, dataElementService, variantService, pageParameterService){

  $scope.variant =  pageParameterService.shareData.variant;
  $scope.mode = pageParameterService.shareData.mode;
  pageParameterService.shareData = undefined;

  $scope.setElement = function(name){
    console.log(name);
      // dataElementService.getVariantByName(name,function(data){
      //     if(data){
      //       pageParameterService.shareData = {variant : data, mode : 2};  
      //       $location.path("config/variant/"+data.name);
      //     } 
      // });   
  }

  $scope.saveElement = function(){
     dataElementService.saveElement($scope.dataelement,$scope.mode,function(data){
        if($scope.mode == 1){
          $scope.dataelement = undefined;
        }
     });
  }

  $scope.deleteElement = function(){
    dataElementService.deleteElement($scope.dataelement._id,function(data){
      $location.path("config/dataelement");
    });
  }
 
}