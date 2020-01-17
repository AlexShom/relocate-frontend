import React, { Fragment } from "react";
import { Checkbox, Input } from "semantic-ui-react";

const DistanceForm = props => {
  return (
    <Fragment>
      <div style={{paddingBottom: "10px"}}>
      <Checkbox />
      <h4 style={{ display: "inline" }}> Use commute time to filter</h4>
      </div>
      <Input inverted size="mini" icon='location arrow' iconPosition='left' placeholder='Postcode or address' />
    </Fragment>
  );
};

export default DistanceForm;
