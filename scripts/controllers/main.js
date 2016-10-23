'use strict';

myModule.controller('mainCtrl', function($scope, dataService) {
	// dataService.getTasks(function(response) {
	// 	$scope.tasks = response.data;
	// });

	$scope.tasks = dataService.getStoredTasks();

	$scope.deleteTask = function(task, index) {
		dataService.deleteTask(task);
		$scope.tasks.splice(index, 1);
	}

	$scope.saveTask = function(task) {
		// var editedTasks = $scope.tasks.filter(function(task) {
		// 	return task.edited == true;
		// })
		// dataService.saveTasks(editedTasks);
		dataService.saveTask(task);
	}

	$scope.addTask = function() {
		var unique_id = Math.random().toString(36).slice(2)
		var task = {id: unique_id, name: "Edit new task"};
		$scope.tasks.unshift(task);
	}
});