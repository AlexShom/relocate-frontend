import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import LoginForm from "../components/LoginForm";

const LandingContent = () => {
  return (
    <div className="landingContainer">
      <div className="parallax"></div>
      <Container className="centered landingBox">
        <h1>//Relocate</h1>
        <h4>A guide on where to live in London</h4>
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
