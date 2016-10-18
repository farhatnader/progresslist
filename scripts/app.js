angular.module("progressListApp", [])
	.controller('mainCtrl', function($scope) {
		$scope.todos = [
			{"name": "wash clothes"},
			{"name": "do homework"},
			{"name": "work out"}
		]
	});