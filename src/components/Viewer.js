import React, { useState } from "react";
import ReactMapGL, { FlyToInterpolator, Layer, Source } from "react-map-gl";

//Mapbox Token
//REMEMBER TO SET TO ENV VARIABLE IN RAILS CREDENTIALS

const TOKEN =
  "pk.eyJ1IjoiYXNob20iLCJhIjoiY2s1NDN0bHc3MGUyZTNubHp1MnpmYmZyNiJ9.-fQZdkNM7ewNZqnDQag12g";

const Viewer = ({
  mapLayer,
  mapFilter,
  mapFillColor,
  selectedFilter,
  findCorrectDistrict
}) => {
  //map control//

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "500px",
    latitude: 51.5262,
    longitude: -0.1198,
    zoom: 9.5 // 11
  });

  //Map controller Settings

  const settings = {
    dragPan: true,
    dragRotate: false,
    scrollZoom: true,
    touchZoom: false,
    touchRotate: false,
    keyboard: false,
    doubleClickZoom: false,
    minZoom: 8, //11
    maxZoom: 20
  };

  const postcodeLayer = {
    id: "data",
    type: "fill",
    paint: {
      "fill-color": mapFillColor,
      "fill-opacity": 0.5,
      "fill-outline-color": "#000000"
    },
    filter: mapFilter
  };

  //Center button function//

  const handleCenter = () => {
    setViewport({
      latitude: 51.5074, //0.23771710824681078
      longitude: -0.1278, //51.44404477710085
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator()
    });
  };

  const handleCenterOnUS = () => {
    setViewport({
      latitude: 37.0902,
      longitude: -95.7129,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator()
    });
  };

  //Hover Function//

  //Hook
  const [hoveredFeature, sethoveredFeature] = useState({ feature: null });

  const addProps = feature => {
    if (feature) {
      if (selectedFilter === "useRent") {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.ave_rent = district.ave_rent;
      } else if (selectedFilter === "usePrice") {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.ave_rent = district.ave_price;
      } else {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.ave_rent = district.ave_yield;
      }
    }
  };

  const onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const feature = features && features.find(f => f.layer.id === "data");
    addProps(feature);
    sethoveredFeature({ feature, x: offsetX, y: offsetY });
  };

  const tooltip = () => {
    return (
      hoveredFeature.feature && (
        <div
          className="tooltip"
          style={{ left: hoveredFeature.x, top: hoveredFeature.y }}
        >
          <div>Postcode: {hoveredFeature.feature.properties.name}</div>
          {selectedFilter === "useRent" ? (
            <div>
              {"Average Rent: £" +
                hoveredFeature.feature.properties.ave_rent +
                "/month"}
            </div>
          ) : null}
          {selectedFilter === "usePrice" ? (
            <div>
              {"Average price /sqft: £" +
                hoveredFeature.feature.properties.ave_rent}
            </div>
          ) : null}
          {selectedFilter === "useYield" ? (
            <div>
              {"Average Yield:" +
                hoveredFeature.feature.properties.ave_rent +
                "%"}
            </div>
          ) : null}
        </div>
      )
    );
  };

  //render//

  return (
    <div id="map">
      <button onClick={handleCenter}>Center on London</button>
      <button onClick={handleCenterOnUS}>Center on usa</button>
      <ReactMapGL
        {...viewport}
        {...settings}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // mapStyle="mapbox://styles/mapbox/dark-v10"

        mapboxApiAccessToken={TOKEN}
        onHover={onHover}
      >
        <Source type="geojson" data={mapLayer}>
          <Layer {...postcodeLayer} />
        </Source>
        {tooltip()}
      </ReactMapGL>
    </div>
  );
};

export default Viewer;
