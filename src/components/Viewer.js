import React, { useState } from "react";
import ReactMapGL, { FlyToInterpolator, Layer, Source } from "react-map-gl";

//Mapbox Token
//REMEMBER TO SET TO ENV VARIABLE IN RAILS CREDENTIALS

const TOKEN =
  "pk.eyJ1IjoiYXNob20iLCJhIjoiY2s1NDN0bHc3MGUyZTNubHp1MnpmYmZyNiJ9.-fQZdkNM7ewNZqnDQag12g";

const Viewer = ({ mapLayer, mapFilter, setMapFilter, mapFillColor, setMapFillColor }) => {
  //map control//

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "500px",
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 9 // 11
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
      "fill-opacity": 0.7
    },
    // filter: ["has", "name"]
    // filter: ["in", "name", "SW3", "SW1"]
    filter: mapFilter
  };

  //Center button function//

  const handleCenter = () => {
    setViewport({
      latitude: 51.5074,
      longitude: -0.1278,
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

  const onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const feature = features && features.find(f => f.layer.id === "data");

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
        mapStyle="mapbox://styles/mapbox/dark-v9"
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
