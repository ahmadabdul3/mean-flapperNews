angular.module('httpService', [])
.factory('httpService', httpService);

httpService.$inject = ['$http'];

function httpService($http) {

	function simpleGet(url) {
		return $http.get(url).then(
                function (result) {
                    return result.data;
                },
                function (result) {
                    $q.reject(result.data);
                }
                success(function(data){
	      angular.copy(data, o.posts);
	    });
	}

	return {
		simpleGet: simpleGet,
		getWithParams: getWithParams
	}
}