angular.module('flapperNews')
.config(indexStates);


indexStates.$inject = ['$stateProvider', '$urlRouterProvider'];

function indexStates($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'home.html',
		controller: 'indexController as indexCtrl'
	})
	.state('posts', {
	  url: '/posts/{id}',
	  templateUrl: 'posts.html',
	  controller: 'postsController as postsCtrl'
	});
	$urlRouterProvider.otherwise('/home');


}