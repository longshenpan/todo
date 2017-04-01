define(function () {
	var map_directive = function($mapServices, $mainServices, $filter){
		return {
            restrict: "E",
            replace: true,
            template: "<div id='allMap' style='height: 400px;'></div>",
            scope: false,
            // scope: {
            //     center: "=",        // Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
            //     markers: "=",       // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
            //     width: "@",         // Map width in pixels.
            //     height: "@",        // Map height in pixels.
            //     zoom: "@",          // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
            //     zoomControl: "@",   // Whether to show a zoom control on the map.
            //     scaleControl: "@",   // Whether to show scale control on the map.
            //     address:"@"
            // },
            link: function (scope, element, attrs) {
			$mainServices.showLoading();
			$mapServices.getCurrentPosition().then(function(address){
                        scope.$apply(function(){
                              scope.$parent._map = $mapServices.ctMap("allMap", address.point);
                              scope.$parent.address = address;
                              scope.$parent.address.date = $filter('date')(new Date(), "yyyy-MM-dd");
                              $mainServices.hideLoding();
                        });
                  }).catch(function(err){
                        $mainServices.hideLoding();
                  });
		}
        };
	}
	map_directive.$inject = ["$mapServices", "$mainServices", "$filter"];
	return map_directive;
});