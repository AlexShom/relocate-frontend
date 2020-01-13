import React, { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import Slider from "../smallComponents/Slider";

const SearchCriteria = props => {
  //Hooks
  const [rentValue, setrentValue] = useState({
    rent: 10000,
    over: false
  });

  const [bedsValue, setbedsValue] = useState({
    beds: 1,
    over: false
  });

  return (
    <Grid>
      <Grid.Column style={{ minWidth: "200px" }}>
        <Slider
          bedsValue={bedsValue}
          setbedsValue={setbedsValue}
          rentValue={rentValue}
          setrentValue={setrentValue}
        />
      </Grid.Column>
      <Grid.Column></Grid.Column>
    </Grid>
  );
};

export default SearchCriteria;
