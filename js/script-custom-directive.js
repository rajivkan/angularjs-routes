angular.module('testApp', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.employee = {
      name: 'Rajiv Ranjan',
      address: 'Bangalore'
    };
  }])
  .directive('myEmployee', function() {
    return {
      //template: 'Name: {{employee.name}} Address: {{employee.address}}'
       restrict: 'E',
       templateUrl: 'templates/employee.html'
    };
  });