/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

myApp.factory('myHttpInterceptor', function ($q) {
    return {
        response: function (response) {
            // do something on success
            if(response.headers()['content-type'] === "application/json; charset=utf-8"){
                // Validate response if not ok reject
                var data = examineJSONResponse(response); // assumes this function is available

                if(!data)
                    return $q.reject(response);
            }
            return response;
        },
        responseError: function (response) {
            // do something on error
            return $q.reject(response);
        }
    };
});


