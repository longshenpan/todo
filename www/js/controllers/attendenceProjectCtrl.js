/** [定义考勤项目控制器] */
define(function(){
	'use strict';
	function AttendenceProjectCtrl($scope, $state, $ionicPopup, $mainServices, $ionicScrollDelegate, $ionicHistory, $ionicListDelegate, $localStrogeServices){
		var actions = $scope.actions = {};
		var vm = $scope.vm = {};
		vm.attendencePro={title: "考勤项目"};
		vm.attendencePro.projects = [
			{code: "01", name: "公共项目"},
			{code: "02", name: "中海油深化"},
			{code: "03", name: "泸州老窖维护"},
			{code: "04", name: "东电前端开发"},
			{code: "05", name: "富士康培训"},
			{code: "06", name: "华润开发"}
		];
		var defaultPro = $localStrogeServices.getObject('defaultProject');
		if (defaultPro) {
			var defaultValue = null;
			for (var i = vm.attendencePro.projects.length - 1; i >= 0; i--) {
				var pro = vm.attendencePro.projects[i];
				if ((pro.code === defaultPro.code && pro.name === defaultPro.name)) {
					defaultValue = pro;
					break;
				}
			}
			if (defaultValue) {
				defaultValue.showDefault = true;
				vm.defaultProject = defaultValue;
			}
		}else{
			vm.defaultProject = vm.attendencePro.projects[0];
		}
		actions.slide = function ($event) {
			console.log($event.target.parentElement);
			$event.target.parentElement.style.transition="-webkit-transform 500ms ease-out";
			$event.target.parentElement.style.transform="translate3d(-100px, 0, 0)";
		}
		/** [setDefault 设置默认项目] */
		actions.setDefault = function (project, $event) {
			if (vm.defaultProject !== null) {
				vm.defaultProject.showDefault = false;
			}
			project.showDefault = true;
			vm.defaultProject = project;
		}
		/** [goBack 返回上次地址] */
		actions.goBack = function(){
			$ionicHistory.goBack();
		}
		/** [closeOptionBtn 关闭选项按钮] */
		actions.closeOptionBtn = function () {
			$ionicListDelegate.closeOptionButtons();
		}
		/** [submitDefault 提交默认项目] */
		actions.submitDefault = function () {
			$localStrogeServices.setObject('defaultProject', vm.defaultProject);
			// console.log(JSON.stringify(defaultProjectObj));
			$ionicPopup.alert({
				title: '提示',
				template: '【'+vm.defaultProject.name+'】' + '设置默认项目成功！'
			});
		}
	}

	AttendenceProjectCtrl.$inject = ['$scope', "$state", '$ionicPopup', "$mainServices", "$ionicScrollDelegate", "$ionicHistory", "$ionicListDelegate", "$localStrogeServices"];
	return AttendenceProjectCtrl;
});