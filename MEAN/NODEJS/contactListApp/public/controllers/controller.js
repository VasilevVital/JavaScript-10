var MyApp = angular.module('myApp', []);
MyApp.controller('AppCtrl', ['$scope', '$http', 
function($scope, $http){
    console.log("Hello World from Controller")
    
    $http.get('/contactlist').success(function(response){
        console.log("I got the data I requested");
        $scope.contactlist = response;
  
  
}]);

    

  $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact);
  };
    
});