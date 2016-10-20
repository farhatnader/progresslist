'use strict';

angular.module('progressListApp')
.service('dataService', function($http) {
	this.getTasks = function(callback) {
		$http.get('mock/tasks.json')
			.then(callback);
	}

	this.deleteTask = function(task) {
		console.log("The '" + task.name + "' has been deleted.")
	}

	this.saveTask = function(task) {
		console.log("The '" + task.name + "' has been saved.")
	}
});