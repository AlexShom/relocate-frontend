import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Slider from "../smallComponents/Slider";

const SearchCriteria = props => {

//Hooks





  return (
    <Grid>
      <Grid.Column style={{minWidth: "200px"}}>
        <Slider/>
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
