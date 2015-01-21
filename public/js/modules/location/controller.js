/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function locationController($scope,locationService){
    //$scope.user = 'admin@xyjp.net';
    locationService.list(function(data){
        //console.log("list:",data);
        $scope.locationList = data;
    });
    /*
    var myOtherModal = $modal({title: 'My Title', content: 'My Content', show: false});
    
    $scope.showModal = function(){
        myOtherModal.show();
    }
    
    var searchAside = $aside({scope: $scope, title: '場所検索',template: 'partials/tpl/search.html',show: false});
    $scope.searchAsideshow = function(){
        searchAside.show();
    }
 
 */
    $scope.gridOptions = { data: 'locationList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "id", displayName: '',width: 30, pinned: true, cellTemplate:'<input type="checkbox" class="checkInList" value="{{row.entity.id}}">'  },
                    { field: "id", displayName: '',width: 30, pinned: true, cellTemplate:'<i class="fa fa-pencil-square-o"></i>'  },
                    { field: "customer.code", displayName: '顧客コード',searchType:'fullText', width: 85 },
                    { field: "customer.name", displayName: '顧客名',searchType:'fullText', width: 200 },
                    { field: "locationNo", displayName: '場所NO',width: 85,searchType:'fullText', cellTemplate: '<div class="ngCellText colt{{$index}}"><a ng-click="showModal();">{{row.entity[col.field]}}</a></div>' },
                    { field: "name", displayName: '場所名',searchType:'fullText', width: 200 },
                    { field: "tel", displayName: '電話', width: 120 },
                    { field: "pref.name", displayName: '都道府県',searchType:'fullText', width: 70 },
                    { field: "ward", displayName: '市区町村',searchType:'fullText', width:70 },
                    { field: "addr1", displayName: '住所1' , width: 100},
                    { field: "addr2", displayName: '住所2' , width: 150},
                    { field: "email", displayName: 'E-mail',searchType:'fullText', width: 210 }
                    
                ]

    };
  


}
