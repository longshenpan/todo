/*
 *地图定位api模块， 依赖百度地图BMap模块
 */
define(["BMap"], function(BMap){
	/**
	* [getLocation 获取当前位置]
	* @Author   ZP
	* @DateTime 2017-01-18T22:50:45+0800
	* @param    {[type]}                 successcallBack [获取到位置的回调函数]
	*/
	function getLocation(successcallBack) {
		/*-------------------- 利用百度API定位 ------------------------*/
	    var geolocation = new BMap.Geolocation();
	    geolocation.getCurrentPosition(
	    //获取位置信息成功
	    function(position){
	        if(this.getStatus() == BMAP_STATUS_SUCCESS){
	        	successcallBack(position);
	        } else {
	            alert('无法获取定位信息，可能影响对服务的筛选');
	        }
	    },{
	        // 指示浏览器获取高精度的位置，默认为false
	        enableHighAccuracy: true,
	        // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
	        // timeout: 5000,
	        // 最长有效期(30S)，在重复获取地理位置时，此参数指定多久再次获取位置
	        maximumAge: 30*1000
	    });
	}
	/**
	* [ctMap 创建地图]
	* @Author   ZP
	* @DateTime 2017-01-14T22:49:48+0800
	* @param    {[type]}                 mapContaierId [地图容器元素Id]
	* @param    {[type]}                 point [地图显示中心]
	*/
	function ctMap(mapContaierId, point){
	    // 百度地图API
	    var map = new BMap.Map(mapContaierId, {minZoom:15}); //初始化地图，规定最小缩放
	    map.centerAndZoom(point, 16); //显示中心new BMap.Point(113.402364,23.056676)
	    map.enableScrollWheelZoom(); //启用滚轮缩放
	    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});//右上角平移和缩放按钮
	    map.addControl(top_right_navigation);
	    addMarker(point, map);
	}
	/**
	* [addMarker 添加标识根据坐标]
	* @Author   ZP
	* @DateTime 2017-01-15T12:34:27+0800
	* @param    {[type]}                 point [description]
	*/
	function addMarker(point, map){  // 创建图标对象
	    // var myIcon = new BMap.Icon("position.png", new BMap.Size(23, 50), {offset: new BMap.Size(10, 25)});
	    // 创建标注对象并添加到地图
	    var marker = new BMap.Marker(point);//, {icon: myIcon}
	    map.addOverlay(marker);
	}
	return {
		getLocation: getLocation,
		ctMap: ctMap,
		addMarker: addMarker
	};

});