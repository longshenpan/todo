var loginService = angular.module("attendenceApp", []);

loginService.controller("loginCtr", function ($scope, $http, $location, $window) {
	$scope.loginObj = {username: "电话号码:", password: "用户密码:", btn: {login: "登陆", register: "注册"}};
	$scope.userinfo = {username: "", password: ""};
	$scope.loginRequired = function($event) {
		$http.post("/login", $scope.userinfo)
			.success(function(data, status, headers, config){
				var div = document.querySelector('#loginform');
				console.log(data);
				$window.location.href = "/main";
				// $location.path("/main");
			})
			.error(function(data, status, headers, config){

			});
	}
});