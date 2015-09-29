angular.module('flapperNews')
.factory('postsService', postsService);

postsService.$inject = ['httpService'];

function postsService(httpService) {
	var serv = this;
	var httpUrls = {
		posts: '/posts'
	};
	var posts = [
	  {id: 1, title: 'post 1', link: '', upvotes: 5, comments: []},
	  {id: 2, title: 'post 2', link: '',  upvotes: 2, comments: []},
	  {id: 3, title: 'post 3', link: '',  upvotes: 15, comments: []},
	  {id: 4, title: 'post 4', link: '',  upvotes: 9, comments: []},
	  {id: 5, title: 'post 5', link: '',  upvotes: 4, comments: []}
	];
	function getPosts() {
		return posts;
	}
	function getAllPosts() {
		httpService.baseGet(httpUrls.posts)
		.then(function(data) {
			angular.copy(data, posts);
			posts.push({title: 'post test', link: '', upvotes: 3, comments: []});
		}, function(data) {
			httpService.handleError(data);
		});
	}
	function createPost(post) {
		if(!post.title || post.title === '') { return; }
		httpService.httpWithParams(httpUrls.posts, httpService.methods.httpPost, post)
		.then(function(data) {
			posts.push(data);
		}, function(data) {
			log(data);
		});
	}
	function addPost(title, link) {
		if(!title || title === '') { return; }
		posts.push({
			title: title,
			link: link,
			upvotes: 0,
			comments: [
			    {author: 'Joe', body: 'Cool post!', upvotes: 0},
			    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
			  ]
		});
	}
	function incrementUpvotesForPost(post) {
		post.upvotes ++;
	}
	function getPostByIndex(index) {
		return posts[index];
	}
	return {
		getPosts: getPosts,
		addPost: addPost,
		incrementUpvotesForPost: incrementUpvotesForPost,
		getPostByIndex: getPostByIndex,
		getAllPosts: getAllPosts,
		createPost: createPost
	}
	function log(msg) {
		console.log(msg);
	}

}