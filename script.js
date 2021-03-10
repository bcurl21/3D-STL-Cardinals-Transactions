
    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Legend"
    ], function(WebScene, SceneView, Camera, Home, Legend) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"a51f05c9778d450b8cc8bfa588e01f12" 
        }
      });
      
      var camera = new Camera({
        position: {
  latitude: 20,
  longitude: -98,
  z: 2400000  // altitude in meters
},
        tilt:25,
        heading: 0
      })
      
     

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    /*view.ui.add(homeBtn, "top-left");*/
      
    });
