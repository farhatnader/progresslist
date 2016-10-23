'use strict';

myModule.controller('mainCtrl', function($scope, dataService) {
	$scope.tasks = dataService.getStoredTasks();

	$scope.deleteTask = function(task, index) {
		dataService.deleteTask(task);
		$scope.tasks.splice(index, 1);
	}

	$scope.saveTask = function(task) {
		dataService.saveTask(task);
	}

	$scope.saveTasks = function() {
		dataService.saveTasks($scope.tasks);
	}

	$scope.addTask = function() {
		var unique_id = Math.random().toString(36).slice(2)
		var task = {id: unique_id, name: "Edit new task"};
		$scope.tasks.unshift(task);
	}
});