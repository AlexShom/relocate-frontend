import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import Viewer from "../components/Viewer";
import SearchCriteria from "../components/SearchCriteria";

const Dashboard = props => {
  return (
    <div className="backBoard">
      <Grid>
        <Grid.Row>
          <Grid.Column name="searchCriteria" width={8}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">
                <SearchCriteria />
              </Container>
            </Container>
          </Grid.Column>
          <Grid.Column name="mapNav" width={8}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">Map nav buttons</Container>
            </Container>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column name="rankingList" width={4}>
            <Container className="gen-box">
              <Container className="gen-box gen-bubble">List placeholder</Container>
            </Container>
          </Grid.Column>
          <Grid.Column name="map" width={12}>
            <Container className="gen-box">
              <Viewer />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Dashboard;
