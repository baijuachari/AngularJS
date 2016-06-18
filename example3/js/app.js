var myApp = angular.module("myApp",[]);

myApp.controller('mainController', function($scope) {
	$scope.name = 'Baiju';
	console.log($scope);
});
