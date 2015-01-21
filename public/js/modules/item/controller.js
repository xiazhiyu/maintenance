/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function itemController($scope,itemService){
    //$scope.user = 'admin@xyjp.net';
    itemService.list(function(data){
        $scope.DataList = data;
    });
    
    
 
    $scope.gridOptions = { data: 'DataList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "", displayName: '',width: 80, pinned: true,  },
                    { field: "id", displayName: 'id',width: 80, visible: false,  },
                    { field: "code", displayName: '品目コード',width: 85, pinned: true, cellTemplate: '<div class="ngCellText colt{{$index}}"><a href="#/item/{{row.entity.id}}">{{row.entity[col.field]}}</a></div>' },
                    { field: "itemType.showText", displayName: '品目タイプ',width: 85},
                    { field: "name", displayName: '品目名', width: 200 },
                    { field: "maker", displayName: 'メーカ', width:160 },
                    { field: "modelNo", displayName: '型番', width: 110 },
                    { field: "janCode", displayName: 'JANコード', width: 110 },
                    { field: "billUnit", displayName: '請求単価' , width: 120},
                    { field: "comment", displayName: '摘要'}
                  ]

    };

}
