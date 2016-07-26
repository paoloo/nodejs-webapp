angular.module("wallapp",[]);
angular.module("wallapp").controller("WallApp",function($scope,$http){

  $scope.initcont=function(){
    $http({
      method : "GET",
      url : "contagens",
      headers : {
      	"Content-Type" : "application/json"
      }
    }).then(function(res){
      $scope.contagens=res.data;
    });
  };

  $scope.initcont();

});
