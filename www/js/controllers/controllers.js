/**
 * [住控制器模块， 依赖angular和控制器模块AppCtrls]
 * @Author   ZP
 * @DateTime 2017-01-18T22:54:07+0800
 */
define(["app", "loginCtrl", "mainCtrl", "menuCtrl", "signInCtrl", "signRecordCtrl", "attendenceProjectCtrl","personalCtrl", "services", "directives"], function(app, AppCtrls) {
    var controllers = angular.module("app.controllers",["app.services","app.config","app.directives"]);
    /**
     * [阻止没有登录的看页面]
     * @Author   ZP
     * @DateTime 2017-02-07T21:55:50+0800
     * @param    {[type]}                 $rootScope [注入根作用域]
     * @param    {Array}                  $state)    {                   var needLoginView [description]
     * @return   {[type]}                            [注入状态机]
     */
    controllers.run(function ($rootScope, $state) {
        var needLoginView = ["tabs.sign","/tab/sign", "/tab/signRecords", "tabs.menu", "/tab/menu", "tabs.signRecords"];
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            if(needLoginView.indexOf(toState.name)>=0 && !$rootScope.isLogin){//判断当前是否登录
                $state.go("/");//跳转到登录页
                event.preventDefault(); //阻止默认事件，即原本页面的加载
            }
        });
    });
    /**
     * 登录控制器
     */
    controllers.controller("loginCtrl", require("loginCtrl"));
    /**
     * 添加主控制器
     */
    controllers.controller("mainCtr", require("mainCtrl"));
    /**
     * 菜单控制器
     */
    controllers.controller("menuCtrl", require("menuCtrl"));
    /**
     * 添加签到控制器
     */
    controllers.controller("signInCtrl", require("signInCtrl"));
    /**
     * 添加签到记录控制器
     */
    controllers.controller("signRecordCtrl", require("signRecordCtrl"));

    /**
     *添加考勤项目控制器
     */
    controllers.controller("attendenceProjectCtrl", require("attendenceProjectCtrl"));
    /** 添加个人信息控制器 */
    controllers.controller("personalCtrl", require("personalCtrl"));
    return controllers;
});


