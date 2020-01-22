import React, { Fragment } from "react";
import { Container, CommentActions } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import { useAuth0 } from "../react-auth0-spa";

const LandingContent = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="landingContainer has-image">
      <Container className="centered landingBox">
        <img style={{width: "400px"}}src="images/relocate-logo.png"></img>
        <h4>An application to deliver London property statistics by postcode district in a user driven and dynamic map environment.</h4>
        {isAuthenticated && (
          <h4>
            Welcome to the /relocate app! Scroll down to see more information or{" "}
            {<br></br>}
            go to your dashboard to get started with your home search!
          </h4>
        )}
        <LoginForm />
      </Container>
    </div>
  );
};

export default LandingContent;
