import React, { useState } from "react";
import ReactMapGL, {
  Marker,
  FlyToInterpolator,
  Layer,
  Source
} from "react-map-gl";
import Pin from "../smallComponents/Pin";

//Mapbox Token

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Viewer = ({
  mapLayer,
  mapFilter,
  mapFillColor,
  selectedFilter,
  findCorrectDistrict,
  workPoint,
  transportType,
  useCommuteTime,
  selectedDistrict
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

  const selectLayer = {
    id: "secondData",
    type: "fill",
    paint: {
      "fill-color": "#0E6EB8",
      "fill-opacity": 0.8,
      "fill-outline-color": "#000000"
    },
    filter: ["in", "name", selectedDistrict]
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
      } else if (selectedFilter === "useYield") {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.ave_rent = district.ave_yield;
      }

      if (transportType === "useDriving") {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.travel_time = district.travelTime;
      } else if (transportType === "useCycling") {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.travel_time = district.travelTime;
      } else if (transportType === "usePublicTransport") {
        const district = findCorrectDistrict(feature.properties.name);
        feature.properties.travel_time = district.travelTime;
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
          {transportType === "useDriving" && useCommuteTime ? (
            <div>
              {"Average Driving Commute Time: " +
                hoveredFeature.feature.properties.travel_time +
                "minutes"}
            </div>
          ) : null}
          {transportType === "useCycling" ? (
            <div>
              {"Average Cycling Commute Time: " +
                hoveredFeature.feature.properties.travel_time +
                "minutes"}
            </div>
          ) : null}
          {transportType === "usePublicTransport" ? (
            <div>
              {"Average Public Transport Commute Time: " +
                hoveredFeature.feature.properties.travel_time +
                "minutes"}
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
      <ReactMapGL
        {...viewport}
        {...settings}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // mapStyle="mapbox://styles/mapbox/dark-v10"

        mapboxApiAccessToken={TOKEN}
        onHover={onHover}
      >
        <Source key="layer1" type="geojson" data={mapLayer}>
          <Layer {...postcodeLayer} />
        </Source>

        <Source key="layer2" type="geojson" data={mapLayer}>
          <Layer {...selectLayer} />
        </Source>

        {tooltip()}
        {workPoint.geometry && (
          <Marker
            longitude={workPoint.geometry.coordinates[0]}
            latitude={workPoint.geometry.coordinates[1]}
            anchor="bottom"
          >
            <Pin size={20} />
          </Marker>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Viewer;
