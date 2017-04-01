/**
 * main.js这个文件完成的事情简单来说就是：载入所有文件，然后在document上运行Angular并将ng-app属性设置为’app’。
 * 这些文件因为是由RequireJS异步载入，因此我们需要来“手动启动”Angular应用。
 * */
require.config({
    // baseUrl: "",// 基目录
    paths: {// 需要引入的js库
        // 库文件
        "BMap": "http://api.map.baidu.com/getscript?v=2.0&ak=91bc04aac3d665927d8c64750da556a9&services=&t=20170118185827",
        // "baidu_AreaRestriction": "http://api.map.baidu.com/library/AreaRestriction/1.2/src/AreaRestriction_min",
        "angular": "../lib/ionic/js/angular/angular",
        "uiRouter":'../lib/ionic/js/angular-ui/angular-ui-router',
        "angularAnimate":'../lib/ionic/js/angular/angular-animate',
        "angularSanitize":'../lib/ionic/js/angular/angular-sanitize',
        "controllers": "controllers/controllers",
        "AppCtrls": "controllers/AppControllers",
        "BMapApi": "controllers/BMapApi",
        "ionic":'../lib/ionic/js/ionic',
        "ionicAngular":'../lib/ionic/js/ionic-angular',
        "ionicBundle": "../lib/ionic/js/ionic.bundle",
        "baidu_location": "../plugins/com.qdc.plugins.baidu.location/www/baidu_location",
        "services": "services/services",
        "config": "config",
        "app": "app",
        // 服务相关的js
        "services": 'services/services',
        "mainServices": 'services/mainServices',
        "signDataServices": "services/signDataServices",
        "mapServices": "services/mapServices",
        "localStrogeServices": "services/localStrogeServices",
        "authorizeServices": "services/authorizeServices",
        // 控制器相关的js
        "mainCtrl": "controllers/mainCtrl",
        "menuCtrl": "controllers/menuCtrl",
        "loginCtrl": "controllers/loginCtrl",
        "signInCtrl": "controllers/signInCtrl",
        "signRecordCtrl": "controllers/signRecordCtrl",
        "attendenceProjectCtrl": "controllers/attendenceProjectCtrl",
        "personalCtrl": "controllers/personalCtrl",
        // 指令相关的js
        "directives": "directives/directives",
        "mapDirectives": "directives/mapDirectives"
    },
    shim: {
        angular: {
          exports: "angular"
        },
        BMap: {
          exports: "BMap"
        },
        baidu_location: {
          exports: "baidu_location"
        },
        uiRouter: {
          deps: ['angular', 'ionic'],   //依赖什么模块
          exports: 'uiRouter'
        },
        app : {exports : 'app'},
        angularAnimate : {deps: ['angular']},
        angularSanitize : {deps: ['angular']},
        ionic :  {deps: ['angular'], exports : 'ionic'},
        ionicAngular: {
            deps: ['angular','ionic','uiRouter', "angularAnimate", "angularSanitize"],
            exports: 'ionicAngular'
        }
    },
    deps:['bootstrap']
    // ,
    // urlArgs: "bust=" + (new Date()).getTime()  //防止读取缓存，调试用
});
