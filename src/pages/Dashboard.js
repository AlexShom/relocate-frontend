import React from "react";
import { Grid, Image, Container } from "semantic-ui-react";
import Viewer from "../components/Viewer"

const Dashboard = props => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column name="searchCriteria" width={8}>
          <Container className="gen-box">HI</Container>
        </Grid.Column>
        <Grid.Column name="mapNav" width={8}>
          <Container className="gen-box">HI</Container>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column name="rankingList" width={4}>
          <Container className="gen-box">HI</Container>
        </Grid.Column>
        <Grid.Column name="map" width={12}>
          <Container className="gen-box">HI</Container>
          <Viewer />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
