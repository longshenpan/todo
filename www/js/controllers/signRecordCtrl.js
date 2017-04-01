/**
 * [签到记录控制器定义]
 * @Author   ZP
 * @DateTime 2017-02-15T09:07:59+0800
 */
define(function(){
	"use strict";
	// 做为 ionContent 或 ionScroll的子元素
	// 刷新完成以后，使用 $broadcast 广播 'scroll.refreshComplete'事件
	// pulling-icon：下拉箭头样式，http://ionicons.com/网站获取相应的类名
	// spinner：数据加载图标 http://ionicframework.com/docs/api/directive/ionSpinner/ 添加相应的类名
	// on-pulling：往下拉取时执行的代码
	// pulling-text：spinner下方显示的文字
	// on-refresh：向下拉取刷新后执行的代码
	/**
	 * [SignRecordCtrl 签到记录控制器]
	 * @Author   ZP
	 * @DateTime 2017-01-23T11:30:21+0800
	 * @param    {[type]}                 $scope       [和元素相关的作用域]
	 * @param    {[type]}                 $routeParams [注入路由参数对象]
	 */
	function SignRecordCtrl($scope, $signDataServices, $mainServices, $ionicScrollDelegate, $ionicHistory) {
		$scope.signRecord={signRecordTitle: "签到记录"};
		$scope.config = {
			hasmore: true,
			showTop: false
		};
		$mainServices.showLoading();
		$scope.doRefresh = function() {
			$signDataServices.getRecords(function(records) {
				$scope.singRecords = $scope.singRecords.concat(records);
				// 刷新完成以后，使用 $broadcast 广播 'scroll.refreshComplete'事件
				$scope.$broadcast('scroll.refreshComplete');
			}, function() {});
		}
		$scope.doPulling = function() {
			console.log('你开始向下拉取了');
		}

		$scope.loadMore = function () {
			$signDataServices.getRecords(function(records) {
				$scope.singRecords = $scope.singRecords.concat(records);
				// 刷新完成以后，使用 $broadcast 广播 'scroll.infiniteScrollComplete'事件
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}, function() {});
		}

		$signDataServices.getRecords(function(records) {
			$scope.singRecords = records;
			$mainServices.hideLoding();
		}, function() {
			$mainServices.hideLoding();
		});
		/** [scrollTop 滚动到顶部] */
		$scope.scrollTop = function() {
		    $ionicScrollDelegate.scrollTop(true);
		};
		/** [toTopScroll 是否展示回到顶部图标] */
		$scope.toTopScroll = function(){
			var showTop = $ionicScrollDelegate.getScrollPosition().top > 250 ? true:false;
			if ($scope.config.showTop === !showTop) {
				$scope.config.showTop = showTop;
				$scope.$apply();
			}
        };
        /** [goBack 返回上一级] */
        $scope.goBack = function () {
        	$ionicHistory.goBack();
        }
	}
	SignRecordCtrl.$inject = ["$scope", "$signDataServices", "$mainServices", "$ionicScrollDelegate", "$ionicHistory"];
	return SignRecordCtrl;
});