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
import { useAuth0 } from "../react-auth0-spa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div style={{ padding: "20px" }}>
      <Grid>
        <Grid.Column>
          {!isAuthenticated && (
            <Button
              onClick={() => loginWithRedirect({})}
              size="huge"
              color="blue"
              inverted
            >
              Log in / Sign up
            </Button>
          )}
          {isAuthenticated && (
            <Button onClick={() => logout()} size="huge" color="red" inverted>
              Log out
            </Button>
          )}
          {isAuthenticated && (
            <Link to= "/dashboard">
              <Button size="huge" color="violet" inverted>
                Go to my Dashboard!
              </Button>
            </Link>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
