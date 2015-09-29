angular.module('httpService', [])
.factory('httpService', httpService);

httpService.$inject = ['$http', '$q'];

function httpService($http, $q) {
	var serv = this;
	var methods = {
		httpGet : 'GET',
		httpPost : 'POST',
		httpPut : 'PUT',
		httpDelete : 'DELETE'
	};
	function baseGet(url) {
		return $http.get(url).then(
                function (result) {
                    return result.data;
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
                params: data,
                dataType: "json",
			    headers: {
			        "Content-Type": "application/json"
			    }
            }).then(
                function (result) {
                	console.log(result.data);
                    return result.data;
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
		handleError: handleError,
		methods: methods
	}
}