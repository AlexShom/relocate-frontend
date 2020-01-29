import React from "react";
import { Button, Grid } from "semantic-ui-react";
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
            <Link to="/dashboard">
              <Button size="huge" color="violet" inverted>
                Go to my Dashboard!
              </Button>
            </Link>
          )}
          {!isAuthenticated && (
            <div style={{ padding: "20px" }}>
              <h4>
                Don't want to make an account? Sign in with the guest
                credentials,{" "}
              </h4>
              <h4 style={{ color: "#ff0066" }}>
                email: guest@example.com | password: P@ssword
              </h4>
            </div>
          )}
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
