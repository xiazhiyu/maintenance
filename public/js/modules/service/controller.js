/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function serviceController($scope,serviceService, commonToolService){
    //$scope.user = 'admin@xyjp.net';
    serviceService.list(function(data){
        //console.log("list:",data);
        $scope.dataList = data;
    });
    
   
    $scope.CsvExport = function(target){
        //console.log("csv:",angular.toJson($scope.serviceList));
        //alert($(target).attr("download"));
        commonToolService.json2csv($scope.dataList,target,"service.csv");
        //console.log("csv:",test);
    };
 
    /*
    $scope.testCsv = function(){
        $scope.gridOptions.filterOptions.filterText = 'serviceDate:2013-10-31;';
    }*/
    //var searchAside = $aside({title: 'サービス検索', content: 'My Content', show: false});
    /*
    var searchAside = $aside({scope: $scope, title: 'サービス検索',template: 'partials/tpl/search.html',show: false});
    $scope.searchAsideshow = function(){
        
        searchAside.show();
    }
    */
    $scope.customerFilter = function(){
        search="str";
    };

    $scope.gridOptions = { data: 'dataList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "", displayName: '',width: 30, pinned: true, cellTemplate:'<input type="checkbox" class="checkInList" value="{{row.entity.serviceId}}">'  },
                    { field: "serviceNo", displayName: '受付NO',width: 80, pinned: true ,searchType:'fullText',cellTemplate: '<div class="ngCellText colt{{$index}}"><a href="#/service/{{row.entity.serviceId}}" >{{row.entity[col.field]}}</a></div>' },
                    { field: "serviceTitle", displayName: '件名', width: 300},
                    { field: "status", displayName: '案件ステータス', width: 110},
                    { field: "customerCode", displayName: '顧客コード', width: 85 },
                    { field: "customerName", displayName: '顧客名', width: 180 },
                    { field: "locationName", displayName: '場所', width: 180 },
                    { field: "equipmentName", displayName: '設備', width: 180 },
                    { field: "serviceDate", displayName: '受付日', width: 120 }
                ]
    };
}


function serviceDisplayController($scope,serviceService,customerService,$routeParams, $modal){
    
   
  if($routeParams.id){
      serviceService.getServiceById($routeParams.id,function(data){
        $scope.service = data;
        $scope.dataList = data.task;
        if($scope.service.equipment.location.customer.billCustomerId){
             customerService.getCustomerById($scope.service.equipment.location.customer.billCustomerId,function(billCustomer){
                 $scope.billCustomer = billCustomer;
             });
        }
      });
  }
  
  
  
  $scope.setEquipment = function(item){
      alert(item);
  };
  
  //var equipmentFormModal = $modal({scope: $scope, template: 'partials/service/modifyForm.tpl.html',show : false});
  //var myOtherModal = $modal({title: 'My Title', content: 'My Content', show: false});
  $scope.showEquipmentFormModal = function(){
        //alert("test");     
        //equipmentFormModal.show();
        var modalInstance = $modal.open({
            templateUrl: 'partials/service/modifyForm.tpl.html',
            controller: ModalInstanceCtrl,
            windowClass: "serviceModifyForm",
            resolve: {
              equipmentId: function () {
                    return $scope.service.equipment?$scope.service.equipment.id:null;
                }       
            }
          });

          modalInstance.result.then(function (selected) {
            $scope.selected = selected;
            if($scope.service.equipment==null||selected!==$scope.service.equipment.id){
                serviceService.updateServiceEquipment($scope.service.id,selected,function(equipment){
                    $scope.service.equipment = equipment;
                });
            };
          }, function () {
           // $log.info('Modal dismissed at: ' + new Date());
          });
        //myOtherModal.show();
  };
  

  
  
  
  $scope.gridOptions = { data: 'dataList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "", displayName: '',width: 30, pinned: true, cellTemplate:'<i class="delete fa fa-plus-circle"></i>'  },
                    { field: "", displayName: '',width: 30, pinned: true, cellTemplate:'<i class="fa fa-pencil-square-o"></i>'  },
                    { field: "taskType.showText", displayName: '作業',width: 80, pinned: true ,searchType:'fullText'},
                    { field: "staff.name", displayName: '担当者', width: 100 ,searchType:'partText'},
                    { field: "beginDatetime", displayName: '作業開始日時', cellFilter:"date:'yyyy-MM-dd hh:mm'", width: 150 ,searchType:'fullText'},
                    { field: "endDatetime", displayName: '作業終了日時', cellFilter:"date:'yyyy-MM-dd hh:mm'", width: 150  ,searchType:'fullText'},
                    { field: "remarks", displayName: '備考' ,searchType:'fullText'}
                   ]
    };
    
    
}


var ModalInstanceCtrl = function ($scope, $modalInstance, serviceService,equipmentId) {

  serviceService.getEquipmentToCustomerInfoList(function(data){
    $scope.equipmentToCustomerList = data;
  });
  
  //$scope.selected.id =4;
  $scope.selected ={
      equipmentId : equipmentId
  };

  $scope.ok = function (equipmentId) {
      //alert(equipmentId);
      //$scope.selected.equipmentId = equipmentId;
      $modalInstance.close(equipmentId);
  };
  
  

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};