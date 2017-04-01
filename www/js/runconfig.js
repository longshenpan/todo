/**
 * [定义和android和ios相关的配置]
 * @Author   ZP
 * @DateTime 2017-02-09T12:43:06+0800
 */
define(['app', 'ionic'], function (app) {
    // 'use strict';
    return angular.module('app.runconfig', ['ionic']).run(
    	function($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory, $cordovaToast) {
	    	$ionicPlatform.ready(function ($rootScope) {
	    	           // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	    	           // for form inputs)
	    	           if (window.cordova && window.cordova.plugins.Keyboard) {
	    	               cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	    	           }
	    	           if (window.StatusBar) {
	    	               // org.apache.cordova.statusbar required
	    	               StatusBar.styleDefault();
	    	           }
	    	           console.log("-----------------------1");
	    	       });
	       //双击退出
	       $ionicPlatform.registerBackButtonAction(function (e) {
	           //判断处于哪个页面时双击退出
	           if ($location.path() == '/login' || $location.path() == '/tab/main') {
	               if ($rootScope.backButtonPressedOnceToExit) {
	                   ionic.Platform.exitApp();
	               } else {
	                   $rootScope.backButtonPressedOnceToExit = true;
	                   $cordovaToast.showShortTop('再按一次退出系统');
	                   setTimeout(function () {
	                       $rootScope.backButtonPressedOnceToExit = false;
	                   }, 2000);
	               }
	               console.log("-----------------------2");
	           }
	           else if ($ionicHistory.backView()) {
	               console.log("-----------------------3");
	               $ionicHistory.goBack();

	           } else {
	               $rootScope.backButtonPressedOnceToExit = true;
	               $cordovaToast.showShortTop('再按一次退出系统');
	               setTimeout(function () {
	                   $rootScope.backButtonPressedOnceToExit = false;
	               }, 2000);
	               console.log("-----------------------4");
	           }
	           e.preventDefault();
	           return false;
	       }, 101);
	    });
});