define([], function(){
	"use strict";
	/**
	 * [SignInCtrl 个人签到控制器]
	 * @Author   ZP
	 * @DateTime 2017-01-14T22:10:36+0800
	 * @param    {[type]}                 $scope [和元素相关的作用域]
	 */
	function SignInCtrl($scope, $ionicPopup, $mainServices, $mapServices, $ionicHistory, $filter, $localStrogeServices) {
		var vm = $scope.vm = {};
		vm.defaultProject = $localStrogeServices.getObject("defaultProject");
		$scope._map = "";
		$scope.projects = [{
			code: "01",
			name: "公共项目"
		}, {
			code: "02",
			name: "明珠项目"
		}, {
			code: "03",
			name: "海油项目"
		}];
		$scope.address = {
			province: "",
			city: "",
			district: "",
			street: "",
			address: "",
			streetNumber: ""
		};
		$scope.signLabelInfo = {
			project: "签到项目",
			address: "签到地址",
			province: "省份：",
			city: "城市：",
			district: "区域：",
			street: "街道：",
			signTitle: "签到管理",
			date: "签到时间"
		};
		/**
		 * [sign 获取当前位置]
		 * @Author   ZP
		 * @DateTime 2017-01-14T22:45:09+0800
		 * @return   {[type]}                 [description]
		 */
		$scope.getCurrentPosition = function() {
			//显示遮罩层
			$mainServices.showLoading();
			$mapServices.getCurrentPosition().then(function(address){
				$scope.$apply(function() {
					$scope.address = address;
					$scope.address.date = $filter('date')(new Date(), "yyyy-MM-dd");
					$mapServices.resetShowPosition(address._map, address.point);
					$mainServices.hideLoding();
				});
			}).catch(function(err){
				console.log(err);
				$mainServices.hideLoding();
			});
		}
		/**
		 * [sign 签到]
		 * @Author   ZP
		 * @DateTime 2017-01-15T21:58:23+0800
		 */
		$scope.sign = function() {
			var msg = $scope.address.province === "" ? "签到前必须先获取当前位置" : "当前用户签到成功！"
			var alertPopup = $ionicPopup.alert({
				title: '提示',
				template: msg
			});
			alertPopup.then(function(res) {
				console.log('Thank you for not eating my delicious ice cream cone');
			});
		}
		/** [goBack 返回上一级] */
		$scope.goBack = function () {
			$ionicHistory.goBack();
		}
	}
	SignInCtrl.$inject = ["$scope", "$ionicPopup", "$mainServices", "$mapServices", "$ionicHistory", "$filter", "$localStrogeServices"];
	return SignInCtrl;
});