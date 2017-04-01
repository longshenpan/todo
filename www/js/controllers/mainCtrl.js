/**
 * [主程序控制器定义]
 * @Author   ZP
 * @DateTime 2017-02-14T21:39:15+0800
 */
define(function(){
	"use strict";
	/**
	 * [MainCtrl 主程序控制器]
	 * @Author   ZP
	 * @DateTime 2017-01-19T20:59:05+0800
	 * @param    {[type]}                 $scope [注入作用域]
	 */
	function MainCtrl($scope) {
	  	$scope.info = {
	  		title: "移动考勤",
	  		person: "个人配置"
	  	};
  	}
  	MainCtrl.$inject = ["$scope"];
  	return MainCtrl;
});