/**
 * [控制器模块]
 * @Author   ZP
 * @DateTime 2017-01-19T21:25:10+0800
 * @param    {Object}                 ["BMapApi"] [依赖BMapApi模块]
 */
define(["BMapApi", "baidu_location"], function (BMapApi, baidu_location) {
    /**
     * [LoginCtrl 登录界面控制器]
     * @Author   ZP
     * @DateTime 2017-02-07T21:21:29+0800
     * @param    {[type]}                 $scope [注入作用域]
     * @param    {[type]}                 $state [注入状态机]
     */
    function LoginCtrl($scope, $state, $rootScope) {
      $scope.loginInfo = {login: "登录"};
      $scope.login = function(user) {
        console.log('Sign-In', user);
        $rootScope.isLogin = true;
        $state.go('tabs.menu');
      };
    }
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
	 /**
    * [MenuCtrl 菜单控制器]
    * @Author   ZP
    * @DateTime 2017-01-18T22:49:52+0800
    * @param    {[type]}                 $scope [注入的作用域]
    */
    function MenuCtrl($scope, $ionicNavBarDelegate, $rootScope) {
      console.log($ionicNavBarDelegate);
    	$scope.menuInfo = {
    		menuItemTitle: "个人资助"
    	};
    }

    /**
    * [SignInCtrl 个人签到控制器]
    * @Author   ZP
    * @DateTime 2017-01-14T22:10:36+0800
    * @param    {[type]}                 $scope [和元素相关的作用域]
    */
    function SignInCtrl($scope, $mainServices, $ionicPopup){
        $scope.projects = [{code: "01", name: "公共项目"},{code: "01", name: "明珠项目"},{code: "01", name: "海油项目"}];
        $scope.address = {province: "", city: "", district: "", street: "", address: "", streetNumber: ""};
        $scope.signLabelInfo = {project: "签到项目",address: "签到地址", province: "省份：", city: "城市：", district: "区域：",street: "街道：",signTitle: "签到管理"};
        /**
         * [sign 获取当前位置]
         * @Author   ZP
         * @DateTime 2017-01-14T22:45:09+0800
         * @return   {[type]}                 [description]
         */
        $scope.getCurrentPosition = function() {
          //显示遮罩层
          $mainServices.showLoading();
          baidu_location.getCurrentPosition(function(position){
            var positions = position.split("\n");
            var latitudes = positions[2].match(/[0-9]+[.][0-9]+/g);
            var longitudes = positions[3].match(/[0-9]+[.][0-9]+/g)
            var point = new BMap.Point(longitudes[0], latitudes[0]);
            var gc = new BMap.Geocoder();
            gc.getLocation(point, function(rs) {
                $scope.$apply(function(){
                  var addComp = rs.addressComponents;
                  addComp.address = addComp.province+addComp.city + addComp.district
                  + addComp.street + addComp.streetNumber;
                  $scope.address = addComp;
                  BMapApi.ctMap("sign-map", point);
                  $mainServices.hideLoding();
                });
            });
          }, function(err){
            alert("错误："+err)
          });
        }
        /**
         * [sign 签到]
         * @Author   ZP
         * @DateTime 2017-01-15T21:58:23+0800
         */
        $scope.sign = function () {
          console.log($ionicPopup);
          var msg = $scope.address.province==="" ? "签到前必须先获取当前位置":"当前用户签到成功！"
          var alertPopup = $ionicPopup.alert({
                 title: '提示',
                 template: msg
               });
          alertPopup.then(function(res) {
            console.log('Thank you for not eating my delicious ice cream cone');
          });
        }
    }
    // 做为 ionContent 或 ionScroll的子元素
    // 刷新完成以后，使用 $broadcast 广播 'scroll.refreshComplete'事件
    // pulling-icon：下拉箭头样式，http://ionicons.com/网站获取相应的类名
    // spinner：数据加载图标 http://ionicframework.com/docs/api/directive/ionSpinner/ 添加相应的类名
    // on-pulling：往下拉取时执行的代码
    // pulling-text：spinner下方显示的文字
    // on-refresh：向下拉取刷新后执行的代码
    /**
     * [SignRecordCtrl 签到记录控制器]
     * @Author   ZP
     * @DateTime 2017-01-23T11:30:21+0800
     * @param    {[type]}                 $scope       [和元素相关的作用域]
     * @param    {[type]}                 $routeParams [注入路由参数对象]
     */
    function SignRecordCtrl($scope, $signDataServices, $mainServices) {
      $scope.signRecord={signRecordTitle: "签到记录"};
      $mainServices.showLoading();
      $scope.doRefresh = function () {
        $signDataServices.getRecords(function(records){
          $scope.singRecords = records;
          // 刷新完成以后，使用 $broadcast 广播 'scroll.refreshComplete'事件
          $scope.$broadcast('scroll.refreshComplete');
        }, function(){
        });
      }

      $scope.doPulling = function() {
        console.log('你开始向下拉取了');
      }
      $signDataServices.getRecords(function(records){
        $scope.singRecords = records;
        $mainServices.hideLoding();
      }, function(){
        $mainServices.hideLoding();
      });
    }
    return {
    	MainCtrl: MainCtrl,
    	MenuCtrl: MenuCtrl,
    	SignInCtrl: SignInCtrl,
      SignRecordCtrl: SignRecordCtrl,
      LoginCtrl: LoginCtrl
    };
});