	// create the module
	var testApp = angular.module('testApp', ['ngRoute']);

	// configure our routes
	testApp.config(function($routeProvider) {
		// route for the home
		$routeProvider.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the template1
		$routeProvider.when('/template1', {
			templateUrl : 'pages/template1.html',
			controller  : 'template1Controller'
		})

		// route for the template1
		$routeProvider.when('/template2', {
			templateUrl : 'pages/template2.html',
			controller  : 'template1Controller'
		});
	});

	// create the controller and inject Angular's $scope
	testApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Home content';
	});

	testApp.controller('template1Controller', function($scope) {
		$scope.message = 'Template 1 content';
	});

	testApp.controller('template2Controller', function($scope) {
		$scope.message = 'Template 2 content';
	});