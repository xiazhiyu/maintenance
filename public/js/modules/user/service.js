function UserService($http, $rootScope, $location,$cookieStore, APIURL){
    var register= function(user, success, error) {
        console.log(user);
        };

    var test = function(success,error){
      $http.get(APIURL+'user/count').success(function(msg){
        console.log("fsafd:"+msg);
        success(msg);
      }).error(function(msg){
        console.log("failed:"+msg);
        error(msg);
      })
    };

    var login = function(user, success,error) {
       console.log("user",user);
        $http({
            method:"POST",
            url:APIURL+'user/auth', 
            data:{
                    email:user.email,
                    password: user.password
                }
        }).success(function(auth, status, headers, config){
            //console.log("succe message",data);
            $rootScope.auth = auth;
            $cookieStore.put("auth",auth);
            success(auth.userId);
            $rootScope.needLogin = false;
        }).error(function(data, status, headers, config){
            console.log("err message",status);
            error(data);
        });
       /*
       $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/CSONE_BACKEND/api/user/auth',
        dataType: "json",
        crossDomain: true,
        data: {
        email:user.email,
        password: user.password
        },
        success: function(data){
          console.log(data);
        }
        });*/
    }
    return  {
  /*      isLoggedIn: function() {

          if($cookieStore.get('user') === undefined&&!$rootScope.user){
            console.log("no cookie and scope.user!");
              return 0;
          }else if($cookieStore.get('user') === undefined&&$rootScope.user){
          console.log("no cookie but scope.user, and set cookie!");
            $cookieStore.put('user',$rootScope.user); 
          }else if(!$rootScope.user&&$cookieStore.get('user')){
            console.log("have cookie but no scope.user, and set scope.user!");
            console.log("cookie user",$cookieStore.get('user'));
           $rootScope.user =$cookieStore.get('user');
          }
          console.log($rootScope.user);
          if($rootScope.user.bookSetting){
            return 1;
          }else{
            return 2;
          }
        },*/
        register: register,
        login: login,
        test: test,
        logout: function() {
           /* $cookieStore.remove('user');
            $location.path('/login');*/
        }
      };
  }