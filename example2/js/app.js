var myApp = angular.module("myApp",[]);

// myApp.controller('mainController', function($scope) {
// 	//to see what does $scope contains.
// 	console.log($scope);
// });

myApp.controller('mainController', function($scope) {
	$scope.name = 'Baiju';
	console.log($scope);
});
