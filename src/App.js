import React from "react";
import LandingPage from "./pages/LandingPage";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import NavBar from "./containers/NavBar"
import Footer from "./containers/Footer";
import Sources from "./pages/Sources"

function App() {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router history={history}>
      {isAuthenticated && <NavBar/>}
        <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path="/sources" exact component={Sources}/>
          <PrivateRoute path="/account" component={Profile} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
