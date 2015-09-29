angular.module('flapperNews', ['ui.router', 'httpService'])
.controller('indexController', indexController);

indexController.$inject = ['postsService'];

function indexController(postsService) {
	var vm = this;
	vm.test = 'Hello world';
	
	vm.Posts = postsService.getPosts;
	vm.addPost = function() {
		postsService.createPost({title: vm.title, link: vm.link});
		clearPostData();
	};
	vm.incrementUpvotesForPost = postsService.incrementUpvotesForPost;

	function clearPostData() {
		vm.title = '';
		vm.link = '';
	}
	
}