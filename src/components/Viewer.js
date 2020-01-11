import React, { useState } from "react";
import MapGL, { FlyToInterpolator, Layer, Source } from "react-map-gl";

//Mapbox Token
//REMEMBER TO SET TO ENV VARIABLE IN RAILS CREDENTIALS

const TOKEN =
  "pk.eyJ1IjoiYXNob20iLCJhIjoiY2s1NDN0bHc3MGUyZTNubHp1MnpmYmZyNiJ9.-fQZdkNM7ewNZqnDQag12g";

// Map controller Settings

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

//Layer Info

const json = require("../geoData/data.json");

const postcodeLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": "#ff0000",
    // {
    // property: 'percentile',
    // stops: [
    //   [0, '#3288bd'],
    //   [1, '#66c2a5'],
    //   [2, '#abdda4'],
    //   [3, '#e6f598'],
    //   [4, '#ffffbf'],
    //   [5, '#fee08b'],
    //   [6, '#fdae61'],
    //   [7, '#f46d43'],
    //   [8, '#d53e4f']
    // ]
    // },
    "fill-opacity": 0.3
  }
};

//class

const Viewer = props => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "500px",
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 9 // 11
  });

  // Center button function

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

  //render

  return (
    <div id="map">
      <button onClick={handleCenter}>Center on London</button>
      <button onClick={handleCenterOnUS}>Center on usa</button>
      <MapGL
        {...viewport}
        {...settings}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}
      >
        <Source type="geojson" data={json}>
          <Layer {...postcodeLayer} />
        </Source>
      </MapGL>
    </div>
  );
};

export default Viewer;
