import React, { useState, useEffect } from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";

const Dashboard = props => {
  //Hooks

  const [selectedFilter, setSelectedFilter] = useState("useRent");

  const [rentValue, setRentValue] = useState({
    rent: 3000,
    over: false
  });

  const [mapLayer, setMapLayer] = useState(null);

  //Helpers

  const getMapLayer = () => {
    fetch("http://localhost:3000/maps/1")
      .then(resp => resp.json())
      // .then(console.log)
      .then(json => setMapLayer(json));
  };

  //Lifecycle

  useEffect(() => {
    getMapLayer();
  }, []);

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
                <Viewer mapLayer={mapLayer} />
              </Container>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
