import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  Header,
  Grid,
  Image,
  Segment,
  Container
} from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="backboard" style={{ height: "50px", color: "white" }}>
      <Segment
        inverted
        vertical
        style={{
          padding: "5em 0em",
          textAlign: "center",
          position: "relative"
        }}
      >
        <List horizontal inverted divided link size="small">
          <List.Item
            as="a"
            target="_blank"
            href="mailto:alexandershom@gmail.com"
          >
            Contact
          </List.Item>

          <List.Item as="a" href="#">
            <Link to="/sources">Sources</Link>
          </List.Item>

          <List.Item>
            Created by Alexander Shomalistos. All Rights Reserved.
          </List.Item>
        </List>
      </Segment>
    </div>
  );
};

export default Footer;
