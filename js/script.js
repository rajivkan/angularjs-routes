	// create the module
	var testApp = angular.module('testApp', ['ngRoute']);

	// configure our routes
	testApp.config(function($routeProvider) {
		// route for the home
		$routeProvider.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'mainController'
		})

		// route for the template1
		$routeProvider.when('/template1', {
			templateUrl : 'templates/template1.html',
			controller  : 'template1Controller'
		})

		// route for the template2
		$routeProvider.when('/template2', {
			templateUrl : 'templates/template2.html',
			controller  : 'template2Controller'
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

	
	function menuController($scope) {
	    $scope.names = [
	        {name:'Home', route:'#'},
	        {name:'Template 1', route:'#template1'},
	        {name:'Template 2', route:'#template2'}
	    ];
	}

	function MyController($scope) {
	    $scope.myData = {};
	    $scope.myData.switch = 3;
	    $scope.myData.showIt = true;

	    $scope.myData.myObject = { var1 : "val1", var2 : "val3", var3 : "val3"};


	    $scope.myData.items    = [ {text : "one"}, {text : "two"}, {text : "three"}, {text : "four"} ];
        $scope.sortField = "text";
        $scope.reverse   = true;

        $scope.myData.doClick = function(item, event) {
            alert("clicked: " + item.text + " @ " + event.clientX + ": " + event.clientY);
        }

        $scope.myData.doClick2 = function(event) {
            alert("clicked: " + event.clientX + ", " + event.clientY);
        }
	};



	var myController2 = function($scope) {
        $scope.data = { time : new Date() };

        $scope.updateTime = function() {
            $scope.data.time = new Date();
        }

        document.getElementById("updateTimeButton")
                .addEventListener('click', function() {
            console.log("update time clicked");
            alert(""+$scope.data.time);
        });
    };

testApp.controller('myController3', ['$scope','$http', function($scope,$http) {
      var responsePromise = $http.get("data.json");
	        responsePromise.success(function(data, status, headers, config) {
	        	$scope.data = data;
	        	document.getElementById("div1").style.background = data.background;
	            //$scope.myData.fromServer = data.title;
	        });
	        responsePromise.error(function(data, status, headers, config) {
	            //alert("failed!");
	        });
}]);