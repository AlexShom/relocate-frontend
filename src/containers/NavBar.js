import React, { useState } from "react";
import { Container, Menu, Button } from "semantic-ui-react";

const NavBar = () => {
  //hooks
  const [activeItem, setActiveItem] = useState(null);

  //helpers
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  //render
  return (
    <div className="nav-bar">
      <Menu inverted>
        <Menu.Item
          name="browse"
          active={activeItem === "browse"}
          onClick={handleItemClick}
        >
          Browse
        </Menu.Item>

        <Menu.Item
          name="submit"
          active={activeItem === "submit"}
          onClick={handleItemClick}
        >
          Submit
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={handleItemClick}
          >
            Sign Up
          </Menu.Item>

          <Menu.Item
            name="help"
            active={activeItem === "help"}
            onClick={handleItemClick}
          >
            Help
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
