angular.module('httpService', [])
.factory('httpService', httpService);

httpService.$inject = ['$http', '$q'];

function httpService($http, $q) {

	function baseGet(url) {
		return $http.get(url).then(
                function (result) {
                    return result;
                },
                function (result) {
                    return $q.reject(result);
                }
                );
	}
	function httpWithParams(url, method, data) {
		return $http({
                url: url,
                method: method,
                params: data
            }).then(
                function (result) {
                    return result;
                },
                function (result) {
                    return $q.reject(result);
                }
            );
	}
    function handleError(error) {
            console.log(error);
    }

	return {
		baseGet: baseGet,
		httpWithParams: httpWithParams,
		handleError: handleError
	}
}