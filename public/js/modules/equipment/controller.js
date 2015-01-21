/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';
function equipmentController($scope,equipmentService){
    //$scope.user = 'admin@xyjp.net';
    equipmentService.list(function(data){
        $scope.DataList = data;
    });
    
    
 
    $scope.gridOptions = { data: 'DataList',
        enablePinning: true,
        enableRowSelection: false,
        columnDefs: [
                    { field: "", displayName: '',width: 80, pinned: true,  },
                    { field: "id", displayName: 'id',width: 80, visible: false,  },
                    { field: "equipmentNo", displayName: '機器NO',width: 80, pinned: true, cellTemplate: '<div class="ngCellText colt{{$index}}"><a href="#/equipment/{{row.entity.id}}">{{row.entity[col.field]}}</a></div>' },
                    { field: "name", displayName: '機器名', width: 200 },
                    { field: "equipmentType.showText", displayName: '機器タイプ', width: 120 },
                    { field: "item.code", displayName: '製品コード', width: 85 },
                    { field: "item.name", displayName: '製品名', width: 200 },
                    { field: "item.modelNo", displayName: '型番', width: 100 },
                    { field: "serialNo", displayName: 'シリアルNo', width: 120 },
                    { field: "item.maker", displayName: 'メーカ', width:150 },
                    { field: "purchaseDate", displayName: '購入日' , width: 100, cellFilter:"date:'yyyy-MM-dd'"},
                    { field: "purchasePlace", displayName: '購入先' , width: 120},
                    { field: "warrantyBegin", displayName: '保証開始日', width: 100 , cellFilter:"date:'yyyy-MM-dd'"},
                    { field: "warrantyEnd", displayName: '保証終了日', width: 100 , cellFilter:"date:'yyyy-MM-dd'"}
                ]

    };

}
