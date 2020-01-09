import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Divider,
  GridColumn
} from "semantic-ui-react";

const LoginForm = () => (
  <div style={{ padding: "20px" }}>
    <Grid>
      <Grid.Column>
        <Button size="huge" color="violet" inverted>
          Log in as a Guest
        </Button>
        <Button size="huge" color="blue" inverted>
          Log in / Sign up
        </Button>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
