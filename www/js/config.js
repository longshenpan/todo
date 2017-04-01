/**
 * [定义和android和ios相关的配置]
 * @Author   ZP
 * @DateTime 2017-02-09T12:43:06+0800
 */
define(['app', 'ionic'], function (app) {
    // 'use strict';
    return angular.module('app.config', ['ionic']).config(
    	function($ionicConfigProvider) {
    	$ionicConfigProvider.tabs.style('standard'); // Tab风格  避免手机上点击时高度会比其他选中的低
       	$ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.navBar.alignTitle("center");
    });

});