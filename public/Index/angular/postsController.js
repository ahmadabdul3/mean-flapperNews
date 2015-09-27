angular.module('flapperNews')
.controller('postsController', postsController);

postsController.$inject = ['postsService', '$stateParams'];

function postsController(postsService, $stateParams) {
	var vm = this;
	vm.post = postsService.getPostByIndex($stateParams.id);
	vm.incrementUpvotes = function(comment) {
		comment.upvotes++;
	};

	vm.addComment = function(){
	  if($scope.body === '') { return; }
	  $scope.post.comments.push({
	    body: $scope.body,
	    author: 'user',
	    upvotes: 0
	  });
	  $scope.body = '';
	};

	vm.addComment = function(){
	  if(vm.body === '') { return; }
	  vm.post.comments.push({
	    body: vm.body,
	    author: 'user',
	    upvotes: 0
	  });
	  vm.body = '';
	};

}