import React from "react";
import { Form, Checkbox } from "semantic-ui-react";

const OrderCheckBoxes = ({ rankSortOrder, setRankSortOrder, rKey }) => {
  return (
    <Form inverted style={{ paddingBottom: "15px" }}>
      <Form.Field>
        <Checkbox
          radio
          label="Ascending"
          name="checkboxRadioGroup"
          value="ASC"
          checked={rankSortOrder[rKey] === "ASC"}
          onChange={(event, output) => setRankSortOrder(output.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          radio
          label="Descending"
          name="checkboxRadioGroup"
          value="DESC"
          checked={rankSortOrder[rKey] === "DESC"}
          onChange={(event, output) => setRankSortOrder(output.value)}
        />
      </Form.Field>
    </Form>
  );
};

export default OrderCheckBoxes;
