require(["esri/config",
               "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Legend"], function(
        esriConfig,
         Map,
        MapView,
        FeatureLayer,
        Legend
      ) {
        esriConfig.apiKey = "AAPKadbb47a8f4024f8694017868bb5f8514m-BINeDp-vV1s7yL8zwJeUAP-PbhOik8FZfNUXBo_uzR_cpQj_uun6RO5a5YScF7";
       

        // Symbol for freeways
        const acquisitionSym = {
          type: "simple-line", // autocasts as new SimpleLineSymbol()
          color: "#74ff29",
          width: "7px",
          style: "solid"
        };

        // Symbol for U.S. Highways
        const TFASym = {
          type: "simple-line", // autocasts as new SimpleLineSymbol()
          color: "#f00f04",
          width: "2px",
          style: "solid"
        };

    var template = {
  title: "{Name}",
  content: [{
    type: "fields",
    fieldInfos: [{
      fieldName: "Name",
      label: "Name:",
      visible: true
    }, {fieldName: "To_",
      label: "To:",
      visible: true
    }, {fieldName: "From_",
      label: "From:",
      visible: true
       }, {fieldName: "Year",
      label: "Year:",
      visible: true
    
    }]
  }]
}

        const transRenderer = {
          type: "unique-value", // autocasts as new UniqueValueRenderer()
          legendOptions: {
            title: "Transaction"},          
          defaultLabel: "I Don't Know",
          field: "Transaction_",
          uniqueValueInfos: [
            {
              value: "Acquisition", // code for interstates/freeways
              symbol: acquisitionSym,
              label: "Acquisition"
            },
            {
              value: "Trade Away/Free Agency", // code for U.S. highways
              symbol: TFASym,
              label: "Trade Away/Free Agency"
            }
          ]
        };

  var stadiumsRenderer = {
    type: "simple",
    legendOptions: {
            title: "Stadium"},
    symbol: {
      type: "simple-marker",
      size: 11,
      color: "white",
      outline: {
        width: 0.5,
        color: "black"
      }
    }
  };
  
  
        // Set the renderer on the layer
        const TransactionsLayer = new FeatureLayer({
          url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/map_(1)/FeatureServer",
          renderer: transRenderer,
          title: "Transactions",
          minScale: 0,
          maxScale: 0,
          popupTemplate: template
        });

        const StadiumsLayer = new FeatureLayer({
          url: "https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/map_(12)/FeatureServer",
          renderer: stadiumsRenderer,
          popupTemplate: template
        });

        // Add the layer to the map
        const map = new Map({
          layers: [TransactionsLayer, StadiumsLayer],
          basemap: "arcgis-dark-gray"          
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-98, 38],
          zoom: 4
        });


        const legend = new Legend({
          view: view,
          layerInfos: [
            {
              layer: TransactionsLayer
            }
          ]
        });

        view.ui.add(legend, "bottom-left");
      });

