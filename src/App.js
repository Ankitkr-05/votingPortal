import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import './App.css';
import "react-bootstrap";

import Navbar from "./component/navigation";
import Home from "./component/home";
import Nomination from "./component/nomination/nomination";
import Voting from "./component/voting";
import Overview from "./component/overview";

function App() {
  return (
    <div className="container-fluid">
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/nomination" exact component={Nomination} />
      <Route path="/voting" exact component={Voting} />
      <Route path="/overview" exact component={Overview} />
      </Router>
      </div>
  );
}

export default App;
