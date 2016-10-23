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

	function saveTask(taskObj) {
		console.log("The task '" + taskObj.name + "' has been saved");
		$cookies.putObject(taskObj.id, taskObj);
	}

	this.saveTask = function(task) {
		saveTask(task);
	}

	this.saveTasks = function(tasks) {
		console.log(tasks);
		tasks.forEach(function(task) {
			console.log(task);
			if (task.edited == true) {
				saveTask(task);
			}
		})
	}
});