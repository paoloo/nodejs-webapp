angular.module("wallapp",[]);
angular.module("wallapp").controller("WallApp",function($scope,$http){

  $scope.initwall=function(){
    $scope.novamsg={
      titulomensagem:"",
      corpomensagem:"",
    };
    $scope.novamsgaccount={
      login:"",
      pass:""
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
        url : "account/checklogin",
        headers : {
          "Content-Type" : "application/json"
        },
        data:JSON.stringify($scope.novamsgaccount)
      }).then(function(res){
        var novamsg = $scope.novamsg;
        novamsg['username'] = res['data'];

        $http({
          method : "POST",
          url : "mensagens",
          headers : {
            "Content-Type" : "application/json"
          },
          data:JSON.stringify(novamsg)
        }).then(function(res){
          alert(res.data);
          $scope.initwall();
        });
      }, function(res) {
        alert('Falha! ' + res['data']);
      })
  };
});
