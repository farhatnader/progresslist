'use strict';

myModule.service('dataService', function($cookies) {
	// this.getTasks = function(callback) {
	// 	$http.get('mock/tasks.json')
	// 		.then(callback);
	// }

	this.getStoredTasks = function() {
		var taskList = $cookies.getAll();
		console.log(taskList);

		var taskArray = []

		for (var task in taskList) {
			if (taskList.hasOwnProperty(task)) {
				var taskObj = $cookies.getObject(task);
				taskArray.push(taskObj);
			}
		}

		return taskArray;
	}

	this.deleteTask = function(task) {
		console.log("The '" + task.name + "' has been deleted.")
		$cookies.remove(task.id)
	}

	this.saveTask = function(task) {
		console.log("The task '" + task.name + "' has been saved");
		$cookies.putObject(task.id, task);
	}
});