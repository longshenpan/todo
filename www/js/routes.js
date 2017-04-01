/*global define, require */
/**
 * [配置路由相关]
 * @Author   ZP
 * @DateTime 2017-02-09T13:21:38+0800
 */
define(['app'], function(app) {
    // 'use strict';
    app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
            .state("/", {
                url: "/",
                controller: 'loginCtrl',
                templateUrl: "template/login.html"
            }).state("tabs.menu",{
                url: "/menu",
                views: {
                    "menu-tab": {
                        controller: 'menuCtrl',
                        templateUrl: "template/menu.html"
                    }
                }
            }).state("tabs",{
                url: "/tab",
                // controller: AppCtrls.TabsCtrl,
                abstract: true,
                templateUrl: "template/tabs.html"
            })
            .state("tabs.sign",{
                url: "/sign",
                views: {
                    "sign-tab": {
                        controller: 'signInCtrl',
                        templateUrl: "template/detail.html"
                    }
                }
            })
            .state("tabs.signRecords",{
                url: "/signRecords",
                views: {
                    "signRecords-tab": {
                        controller: 'signRecordCtrl',
                        templateUrl: "template/signRecord.html"
                    }
                }
            }).state("signM", {
                url: '/signM',
                controller: 'signInCtrl',
                templateUrl: "template/detail.html",
                cache: false
            }).state("attendencePro", {
                url: '/attendencePro',
                controller: 'attendenceProjectCtrl',
                templateUrl: "template/attendnceproject.html",
                cache: false
            }).state("personal", {
                url: '/personal',
                controller: 'personalCtrl',
                templateUrl: "template/personal.html",
                cache: false
            });
        }
    ]);
});
