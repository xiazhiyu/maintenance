/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function dataElementController($scope,$rootScope,$location,dataElementService, pageParameterService){

    $scope.createByName = function(){
        pageParameterService.shareData = {dataelement: {name:$scope.name, type:"text1"}, mode: 1};
        $location.path("config/dataelement/create");
    };

    $scope.editByName = function(){
        dataElementService.getElementByName($scope.name,function(data){
            if(data){
              pageParameterService.shareData = {dataelement : data, mode : 2};  
              $location.path("config/dataelement/"+data.name);
            } 
        });    
    };
}

function dataElementSaveController($scope, $location, dataElementService, pageParameterService){

   $scope.elementType = [
      {value:'text1', text:'文字列'},
      {value:'amount', text:'小数'},
      {value:'date', text:'日付'},
      {value:'number', text:'整数'},
      {value:'select', text:'選択型'},
      {value:'email', text:'E-mail'}
    ];

  $scope.dataelement =  pageParameterService.shareData.dataelement;
  $scope.mode = pageParameterService.shareData.mode;
  pageParameterService.shareData = undefined;


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