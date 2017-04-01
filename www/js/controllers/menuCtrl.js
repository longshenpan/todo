/**
 * [菜单控制器定义]
 * @Author   ZP
 * @DateTime 2017-02-14T21:39:15+0800
 */
define(function(){
	"use strict";
	 /**
    * [MenuCtrl 菜单控制器]
    * @Author   ZP
    * @DateTime 2017-01-18T22:49:52+0800
    * @param    {[type]}                 $scope [注入的作用域]
    */
    function MenuCtrl($scope, $localStrogeServices) {
    	$scope.menuInfo = {
    		menuItemTitle: "我的考勤"
    	};
        // console.log($localStrogeServices.getObject("testUser"));
    }
    MenuCtrl.$inject = ["$scope", "$localStrogeServices"];
	return MenuCtrl;
});