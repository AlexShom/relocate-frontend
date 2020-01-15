import React, { useState, useEffect } from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";

const Dashboard = props => {
  //Hooks
  const [rentValue, setrentValue] = useState({
    rent: 10000,
    over: false
  });

  const [bedsValue, setbedsValue] = useState({
    beds: 1,
    over: false
  });

  const [mapLayer, setmapLayer] = useState(null);

  //Helpers

  const getMapLayer = () => {
    const json = require("../geoData/mapWithRentalsTest.json");
    setmapLayer(json);
  };

  //Lifecycle

  useEffect(() => {
    getMapLayer()
  },[])

  //Render

  return (
    <div className="backBoard">
      <Grid>
        <Grid.Row>
          <Grid.Column name="searchCriteria" width={8}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                <SearchCriteria
                  rentValue={rentValue}
                  bedsValue={bedsValue}
                  setrentValue={setrentValue}
                  setbedsValue={setbedsValue}
                />
              </Container>
            </Container>
          </Grid.Column>
          <Grid.Column name="mapNav" width={8}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                Map nav buttons
              </Container>
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column name="rankingList" width={4}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                List placeholder
              </Container>
            </Container>
          </Grid.Column>
          <Grid.Column name="map" width={12}>
            <Container className="gen-box">
              <Viewer mapLayer={mapLayer} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
