import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ padding: "50px" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
        <Button size="huge" color="violet" inverted> Log in as a Guest </Button> 
  <h2>or</h2>
      <Form size="large" >
        <Segment stacked >
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
