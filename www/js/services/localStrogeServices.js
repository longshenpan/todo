/**
 * [定义本地存储服务]
 * @Author   ZP
 * @DateTime 2017-02-17T09:02:35+0800
 */
define(function(){
	'use strict';
	var factory = function ($window) {
		return {
			set: function(key, value){
				$window.localStorage.setItem(key, value);
			},
			get: function(key, defaultValue){
				return $window.localStorage.getItem(key) || defaultValue;
			},
			setObject: function (key, value) {
				$window.localStorage.setItem(key, JSON.stringify(value));
			},
			getObject: function(key){
				return JSON.parse($window.localStorage.getItem(key));
			},
			remove: function (key) {
				$window.removeItem(key);
			}
		};
	}
	factory.$inject = ["$window"];
	return factory;
});