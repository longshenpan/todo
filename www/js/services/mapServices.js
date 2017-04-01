define(["BMap","baidu_location"],function(BMap, baidu_location){
	"use strict";
	function factory(){
		var _map = null;
		return {
			getCurrentPosition: function () {
				return new Promise(function(resolve, reject){
					baidu_location.getCurrentPosition(function(position){
						var position = JSON.parse(position);
						var point = new BMap.Point(position.lontitude, position.latitude);
						var positions = {};
				    	positions.address = position.addr;
				    	positions.point = point;
				    	positions._map = _map;
				    	resolve(positions);
					},function(err){
						reject(err);
					});
				});
			},
			resetShowPosition: function(map, point){
				map.clearOverlays();
				map.setCenter(point); //显示中心new BMap.Point(113.402364,23.056676)
				this.addMarker(map, point);
				// map.enableScrollWheelZoom(); //启用滚轮缩放
			},
			ctMap: function(mapContaierId, point){
				// 百度地图API
				_map = new BMap.Map(mapContaierId, {minZoom:15}); //初始化地图，规定最小缩放
				_map.centerAndZoom(point, 16); //显示中心new BMap.Point(113.402364,23.056676)
				_map.enableScrollWheelZoom(); //启用滚轮缩放
				// var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL});//右上角平移和缩放按钮
				// _map.addControl(top_right_navigation);
				// var arrType = new Array();
				// arrType.push(BMAP_NORMAL_MAP);
				// arrType.push(BMAP_SATELLITE_MAP);
				// _map.addControl(new BMap.MapTypeControl({
 			// 		type: BMAP_NORMAL_MAP, mapTypes: arrType
				// })); //添加地图类型控件
				this.addMarker(_map, point);
				return _map;
			},
			addMarker: function(map, point){
				// var myIcon = new BMap.Icon("position.png", new BMap.Size(23, 50), {offset: new BMap.Size(10, 25)});
				// 创建标注对象并添加到地图
				var marker = new BMap.Marker(point);//, {icon: myIcon}
				map.addOverlay(marker);
			}
		};
	}
	factory.$inject = [];
	return factory;
});