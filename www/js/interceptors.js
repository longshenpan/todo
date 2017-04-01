define(['app'], function (app) {
	// 定义一个 Service ，稍等将会把它作为 Interceptors 的处理函数
    app.factory('HttpInterceptor', ['$q', '$localStrogeServices', function HttpInterceptor($q, $localStrogeServices) {
		return {
			request: function(config){
				config.headers["token"] = $localStrogeServices.get('token');
			    return config;
			},
			requestError: function(err){
			    return $q.reject(err);
			},
			response: function(res){
				console.log(res);
			    return res;
			},
			responseError: function(err){
			    if(-1 === err.status) {
			    	// 远程服务器无响应
			    } else if(500 === err.status) {
			    	// 处理各类自定义错误
			    } else if(501 === err.status) {
			    	// ...
			    }
			    return $q.reject(err);
			}
		};
    }]);
    // 添加对应的 Interceptors
    app.config(['$httpProvider', function($httpProvider){
        $httpProvider.interceptors.push('HttpInterceptor');
    }]);
});