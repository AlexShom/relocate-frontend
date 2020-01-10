import React, { Fragment } from "react";
import LandingContent from "../containers/LandingContent";
import Footer from "../containers/Footer";

const LandingPage = props => {
  return (
    <Fragment>
      <LandingContent />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
