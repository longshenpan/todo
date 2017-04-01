/** [定义个人信息控制器] */
define(function () {
	'use strict';
	function PersonalCtrl($scope, $state, $ionicHistory) {
		var vm = $scope.vm = {title: "个人信息"},
			actions = $scope.actions={};
		vm.user = {
			code: "20157473",
			name: "张盼",
			company: "四川虹信智远软件有限公司",
			department: "共享服务事业部",
			job: "软件开发工程师",
			cellphone: "15888888888",
			mail: "niubi@163.com"
		};
		vm.label = {
			company: "公司",
			department: "部门",
			job: "职务",
			cellphone: "手机",
			mail: "邮箱"
		};
		/** [goBack 退回上一步] */
		actions.goBack = function () {
			$ionicHistory.goBack();
		}

	}

	PersonalCtrl.$inject = ["$scope", "$state", "$ionicHistory"];

	return PersonalCtrl;
});