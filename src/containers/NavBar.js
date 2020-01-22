import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import { useAuth0 } from "../react-auth0-spa";
import { Redirect } from "react-router-dom";

const NavBar = () => {
  //auth variables
  const { logout, isAuthenticated, user } = useAuth0();

  //hooks
  const [activeItem, setActiveItem] = useState("");

  //helpers
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  //render
  return (
    <div className="nav-bar">
      <Redirect push to={activeItem} />
      <Menu style={{ height: "0px" }} inverted>
        <Menu.Item name="" active={activeItem === ""} onClick={handleItemClick}>
          <img style={{ width: "100px" }} src="images/relocate-logo.png"></img>
        </Menu.Item>

        <Menu.Item
          name="dashboard"
          active={activeItem === "dashboard"}
          onClick={handleItemClick}
        >
          Dashboard
        </Menu.Item>

        <Menu.Item
          name="Sources"
          active={activeItem === "Sources"}
          onClick={handleItemClick}
        >
          Sources/Methodology
        </Menu.Item>
        <Menu.Menu position="right">
          
          {isAuthenticated && (
            <Menu.Item name="account" onClick={handleItemClick}>
              <img
                style={{ borderRadius: "50%", paddingRight: "5px" }}
                src={user.picture}
              ></img>
              <div>{user.email}</div>
            </Menu.Item>
          )}
          <Menu.Item>
            <Button onClick={() => logout()} color="red" inverted>
              Log out
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button name="account" onClick={handleItemClick} color="violet">
              ACCOUNT
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
