/**
 * [登录界面控制器定义]
 * @Author   ZP
 * @DateTime 2017-02-14T21:39:15+0800
 */
define(function(){
	"use strict";
	/**
	 * [LoginCtrl 登录界面控制器]
	 * @Author   ZP
	 * @DateTime 2017-02-07T21:21:29+0800
	 * @param    {[type]}                 $scope [注入作用域]
	 * @param    {[type]}                 $state [注入状态机]
	 * @param    {[type]}                 $state [注入根作用域]
	 */
	function LoginCtrl($scope, $state, $rootScope, $localStrogeServices, $authorizeServices, $ionicPopup) {
		$scope.loginInfo = {login: "登录"};
		$scope.login = function(user) {
			// $rootScope.isLogin = true;
			// $state.go('tabs.menu', user);
			$authorizeServices.login("http://192.168.1.102:3000/login", user, function(data){
				$rootScope.isLogin = true;
				if (data.status === 'OK') {
					$state.go('tabs.menu', user);
				}else{
					$ionicPopup.alert({
						title: '提示',
						template: data.msg
					});
				}
				// $localStrogeServices.setObject("testUser", user);
				// alertPopup.then(function(res) {
				// 	console.log('Thank you for not eating my delicious ice cream cone');
				// });
			})
		};
	}
	LoginCtrl.$inject = ["$scope", "$state", "$rootScope", "$localStrogeServices", "$authorizeServices", "$ionicPopup"];
	return LoginCtrl;
});