angular.module('progressListApp')
.directive('tasks', function() {
	return {
		templateUrl: 'templates/tasks.html',
		controller: 'mainCtrl'
	}
})