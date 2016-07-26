angular.module("wallapp",[]);
angular.module("wallapp").controller("WallApp",function($scope,$http){

  $scope.initwall=function(){
    $scope.novamsg={
      titulomensagem:"",
      corpomensagem:""
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

  $scope.sendmsg=function(){
    $http({
      method : "POST",
      url : "mensagens",
      headers : {
        "Content-Type" : "application/json"
      },
      data:JSON.stringify($scope.novamsg)
    }).then(function(res){
      alert(res.data);
      $scope.initwall();
    });
  };
});
