define(function () {
	'use strict'
	var factory = function ($http) {
		var data = [];
		return {
			getRecords: function (successCallback, errCallback) {
				$http.get("http://192.168.1.102:3000/GetRecords")
				.then(function(result){
					if (typeof successCallback === "function") {
						successCallback(result.data);
					}
				}).catch(function(result){
					if (typeof errCallback === "function") {
						errCallback(result.data);
					}
				});
			}
		}
	}
	factory.$inject = ['$http'];
	return factory;
});