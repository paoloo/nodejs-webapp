angular.module("wallapp",[]);
angular.module("wallapp").controller("WallApp",function($scope,$http,$window){

    $scope.initwall=function(){
        $scope.account={
            login: "",
            pass: ""
        };
    };

    $scope.initwall();

    $scope.logar=function(){
        $http({
            method : "POST",
            url : "account/checklogin",
            headers : {
                "Content-Type" : "application/json"
            },
            data:JSON.stringify($scope.account)
        }).then(function(res){
            alert(res.data);
            $window.location.href = '/';
        });
    };
});
