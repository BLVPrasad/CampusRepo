goCampus.views.mapPanel = new Ext.Panel({

    id: 'mainPanel',
    layout: 'fit',
    html: '<div id="map_canvas" style="width:100%; height:600px"></div>',
    listeners: {
        afterrender: function () {
            var map = new GMap2(document.getElementById("map_canvas"));
            var mapControl = new GMapTypeControl();
            map.setCenter(new GLatLng(12.824543, 80.217619), 16);
            var level;
            var boundaries = new GLatLngBounds(new GLatLng(12.823162, 80.215795), new GLatLng(12.825757, 80.219507));
            var campusmap = new GGroundOverlay("app/img/map01.png", boundaries);
            var campusmap16 = new GGroundOverlay("app/img/map01.png", boundaries);
            var campusmap17 = new GGroundOverlay("app/img/map01.png", boundaries);
            map.addControl(new GSmallMapControl());
            //map.addControl(new GMapTypeControl());
            map.addOverlay(campusmap16);
	        GEvent.addListener(map, "maptypechanged", function () {
	            var mapType = map.getCurrentMapType();
	            if (mapType.getName() == "Map") {
	                map.addOverlay(campusmap16);
	                if (level <= 16) {
	                    map.addOverlay(campusmap16);
	                }
	                if (level == 17) {
	                    map.addOverlay(campusmap17);
	                }
	            } else if (mapType.getName() == "Hybrid" || mapType.getName() == "Satellite") {
	                map.clearOverlays();
	            }
	       });

          GEvent.addListener(map, "zoomend", function (oldLevel, newLevel) {
                level = newLevel;
                if (newLevel < 15) {
                    map.clearOverlays();
                }
                if (newLevel >= 15) {
                    if (newLevel == 16) {
                        map.addOverlay(campusmap16);
                    }
                    if (newLevel == 17) {
                        map.addOverlay(campusmap17);
                    }
                }
          });
        }
    },
    dockedItems: [{
        layout:'fit',
        id: 'map',
        xtype: 'toolbar',
        title: 'Hexaware Location',
        cls:'small_title',
        ui:'light'
    }]
});

                     
    
    