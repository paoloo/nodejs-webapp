angular.module("wallapp",[]);
angular.module("wallapp").controller("WallApp",function($scope,$http){

  $scope.initwall=function(){
    $scope.account={
      login: "",
      pass: "",
      fullname: ""
    };
    $http({
      method : "GET",
      url : "mensagens",
      headers : {
      	"Content-Type" : "application/json"
      }
    }).then(function(res){
      $scope.mensagens=res.data;
    });
  };

  $scope.initwall();

  $scope.newacc=function(){
    $http({
      method : "POST",
      url : "account",
      headers : {
        "Content-Type" : "application/json"
      },
      data:JSON.stringify($scope.account)
    }).then(function(res){
      alert(res.data);
      $scope.initwall();
    });
  };
});
