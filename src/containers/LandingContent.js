import React, { Fragment } from "react";
import { Container, CommentActions } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";
import { useAuth0 } from "../react-auth0-spa";

const LandingContent = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="landingContainer">
      <div className="parallax"></div>
      <Container className="centered landingBox">
        <img src="images/relocate-logo.png"></img>
        <h1>{"</relocate>"}</h1>
        <h4>A guide on where to live in London</h4>
        {isAuthenticated && (
          <h4>
            Welcome to the /relocate app! Scroll down to see more information or{" "}
            {<br></br>}
            go to your dashboard to get started with your home search!
          </h4>
        )}
        <LoginForm />
      </Container>
      <div className="scroll-down"></div>
      <Container style={{ backgroundColor: "black" }}>
        hey ho to you bro
      </Container>
      <div className="parallax"></div>
    </div>
  );
};

export default LandingContent;
