
var appp = angular.module('myApp', []);
appp.controller('ctrl', function ($scope) {
 $scope.namefield=null;
 $scope.passwordfield=null;
  $scope.enter=function(){
  $scope.namefield=$scope.emailname;
  $scope.passwordfield=$scope.passwordname;
  $scope.emailarr=["ankushsood50@gmail.com","geeteshsood50@gmail.com","shivamsood50@gmail.com","parassood50@gmail.com"];
  $scope.passwordarr=["1234","12345","123456","1234567"];
  
  for(let i=0;i<4;i++){
      if($scope.emailarr[i]==$scope.namefield&&$scope.passwordarr[i]==$scope.passwordfield){
        console.log($scope.namefield);
        console.log($scope.passwordfield);
        window.location.href="file:///D:/angular%20form/runtimecolorpicker.html";
      }
  }
}
});

var app = angular.module('myapp', []);
app.controller('ctrl', function ($scope, $http) {
 $http.get("https://3gu8fobdu7.execute-api.us-east-2.amazonaws.com/v1/api/msbdocs/getmessage?operation=read&operation=read")
  .then(function(response) {
    $scope.content = response.data.Items;      
});
$scope.postdata=function(){
$http.post("https://3gu8fobdu7.execute-api.us-east-2.amazonaws.com/v1/api/msbdocs/getmessage",{operation:"create",Item:{description: $scope.postdes,id:$scope.postid}}).then(function(response){ 
  if(response.data){
  console.log("ok"); 
  }
});
}

$scope.delete=function(items){
    console.log(items);
    $http.delete(`https://3gu8fobdu7.execute-api.us-east-2.amazonaws.com/v1/api/msbdocs/getmessage?operation=delete&id=${items}`)
    .then(function(response) {   
      if(response.data){

      }
    });  
    }

$scope.edit=function(previd,prevdesc){
  $http.put(`https://3gu8fobdu7.execute-api.us-east-2.amazonaws.com/v1/api/msbdocs/getmessage?operation=update&id=${previd}&description=${prevdesc}&operation=update&id=818624ac-7fa5-42fc-bd07-2c5b0719bd8f&description=dwqewqewq`)
  .then(function(response) {      
  console.log(response.data.description);
  console.log(response.data.id);
  });  
}
});