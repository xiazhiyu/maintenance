/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function customerController($scope,parameters,customerService){
    //$scope.user = 'admin@xyjp.net';
    customerService.list(function(data){
       // console.log("list:",data);
        $scope.customerList = data;
    });
    
    /*
    var myOtherModal = $modal({title: 'My Title', content: 'My Content', show: false});
    
    $scope.showModal = function(){
        myOtherModal.show();
    };
    /*
    var searchAside = $aside({scope: $scope, title: '顧客検索',template: 'partials/tpl/search.html',show: false});
    $scope.searchAsideshow = function(){
        searchAside.show();
    }
 */
 
    $scope.gridOptions = { data: 'customerList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "id", displayName: '',width: 30, pinned: true, cellTemplate:'<input type="checkbox" class="checkInList" value="{{row.entity.id}}">'  },
                    { field: "id", displayName: '',width: 30, pinned: true, cellTemplate:'<i class="fa fa-pencil-square-o"></i>'  },
                    { field: "code", displayName: '顧客コード',width: 85, pinned: true, searchType:'fullText', cellTemplate: '<div class="ngCellText colt{{$index}}"><a href="#/customer/{{row.entity.id}}">{{row.entity[col.field]}}</a></div>' },
                    { field: "name", displayName: '顧客名',searchType:'fullText', width: 200 },
                    { field: "tel", displayName: '電話', width: 120 },
                    { field: "pref.name", displayName: '都道府県',searchType:'fullText', width: 70 },
                    { field: "billWard", displayName: '市区町村',searchType:'fullText', width:70 },
                    { field: "addr1", displayName: '住所1' , width: 100},
                    { field: "addr2", displayName: '住所2' },
                    { field: "email", displayName: 'E-mail',searchType:'fullText', width: 210 }
                    
                ]

    };
  
}


function customerDisplayController($scope,customerService,commonToolService,$routeParams){
  
  commonToolService.getPageVariant();
   
  if($routeParams.id){
      customerService.getCustomerById($routeParams.id,function(data){
        $scope.customer = data;
        if($scope.customer.billCustomerId){
             customerService.getCustomerById($scope.customer.billCustomerId,function(billCustomer){
                 $scope.billCustomer = billCustomer;
             });
        }
      });
  }
 
}

function customerCreateController($scope,customerService,commonToolService,parameters){
    
    console.log("parameters:",parameters);

    $scope.saveCustomer = function(customer){
        alert(customer.pref.id);
    };
    
}