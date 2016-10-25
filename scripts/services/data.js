'use strict';

myModule.service('dataService', function($cookies) {
	this.getStoredTasks = function() {
		var taskList = $cookies.getAll();
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
		$cookies.remove(task.id)
	}

	function saveTask(taskObj) {
		$cookies.putObject(taskObj.id, taskObj);
	}

	this.saveTask = function(task) {
		saveTask(task);
	}

	this.saveTasks = function(tasks) {
		tasks.forEach(function(task) {
			if (task.edited == true) {
				saveTask(task);
			}
		});
	}
});