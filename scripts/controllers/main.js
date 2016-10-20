'use strict';

angular.module('progressListApp')
.controller('mainCtrl', function($scope, dataService) {
	dataService.getTasks(function(response) {
		$scope.tasks = response.data;
	});

	$scope.deleteTask = function(task, index) {
		dataService.deleteTask(task);
		$scope.tasks.splice(index, 1);
	}

	$scope.saveTask = function(task) {
		dataService.saveTask(task);
	}

	$scope.addTask = function() {
		var task = {name: "Edit new task"};
		$scope.tasks.unshift(task);
	}
});