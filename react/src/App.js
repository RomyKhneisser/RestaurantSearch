import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RestaurantList from "./components/RestaurantList";
import VisitedRest from "./components/VisitedRest";



function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Lomato
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/restaurants"} className="nav-link">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/visitedRest"} className="nav-link">
              Been There!
            </Link>
          </li>
       
        </div>
      </nav>
      
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/","/restaurants"]} component={RestaurantList} />
          <Route path="/visitedRest" component={VisitedRest} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
