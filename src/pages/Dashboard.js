import React, { useState, useEffect } from "react";
import { Grid, Container } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";
import { mapsAPI, postcodesAPI } from "../adapters/API";

const Dashboard = props => {
  //Hooks

  const [selectedFilter, setSelectedFilter] = useState("useRent");

  const [rentValue, setRentValue] = useState({
    rent: 0,
    over: false
  });

  const [mapLayer, setMapLayer] = useState(null);

  //Data driven styling

  const [mapFilter, setMapFilter] = useState(["has", "name"]);
  const [mapFillColor, setMapFillColor] = useState([
    "match",
    ["get", "name"],
    "SW3",
    "#fbb03b",
    "#096925"
  ]);

  //Helpers

  const getMapLayer = () => {
    fetch(mapsAPI)
      .then(resp => resp.json())
      .then(json => json.data)
      .then(json => setMapLayer(json));
  };

  const getPostcodeInfo = () => {
    fetch(postcodesAPI)
      .then(resp => resp.json())
      // .then(resp)
      .then(console.log);
  };

  //Lifecycle

  useEffect(() => {
    getMapLayer();
    getPostcodeInfo();
  }, []);

  useEffect(() => {
    console.log("hit");
    if (selectedFilter === "useRent") {
      //runFilter(rentvalues)
    } else if (selectedFilter === "usePrice") {
      //runFilter(pricevalues)
    } else {
      //runfFilter(yieldvalues)
    }
  }, [selectedFilter]);

  //Render

  return (
    <div className="backBoard">
      <Grid>
        <Grid.Row>
          <Grid.Column name="searchCriteria" width={6}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                <SearchCriteria
                  rentValue={rentValue}
                  setRentValue={setRentValue}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={setSelectedFilter}
                />
              </Container>
            </Container>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                List placeholder
              </Container>
            </Container>
          </Grid.Column>

          <Grid.Column name="map" width={10}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                Map nav buttons
              </Container>
              <Container className="gen-box">
                <Viewer
                  mapFillColor={mapFillColor}
                  setMapFillColor={setMapFillColor}
                  mapFilter={mapFilter}
                  setMapFilter={setMapFilter}
                  mapLayer={mapLayer}
                />
              </Container>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
