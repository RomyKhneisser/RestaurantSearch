import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/AddTutorial";
import Tutorial from "./components/Tutorial";
import TutorialsList from "./components/TutorialsList";
import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import VisitedRest from "./components/VisitedRest";
import newCard from "./components/CardComponent";


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/restaurants" className="navbar-brand">
          Loamato
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
      {/* <Users> </Users> */} 

     
      

      <div className="container mt-3">
        <Switch>
          {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} /> */}
          <Route exact path={["/","/restaurants"]} component={RestaurantList} />
          <Route path="/restaurants/:id" component={Restaurant} />
          <Route path="/visitedRest" component={VisitedRest} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
