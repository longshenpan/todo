/**
 * [用户验证服务定义]
 * @Author   ZP
 * @DateTime 2017-02-17T09:40:14+0800
 */
define(function(){
	var factory = function ($http, $localStrogeServices) {
		return {
			uid: "",
			token: "",
			logout: function(){
				this.uid = "";
				this.token = "";
				$localStrogeServices.remove("authorize.uid");
				$localStrogeServices.remove("authorize.token");
			},
			login: function(url, user, callback){
				$http.post(url, user)
				.then(function(result){
					var resHeaders = result.headers();
					$localStrogeServices.set('token', resHeaders.token);
					var tt = $localStrogeServices.get('token');
					callback(result.data);
				});
			}
		};
	}
	factory.$inject = ["$http", "$localStrogeServices"];
	return factory;
});