import React, { Component } from "react";
// import "react-bootstrap";
import "./navigation.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
      return (
        <div className="navigation">
        <div className="nav_postion">
        <nav className="navbars">
          <Link to="/">Home</Link>
        </nav>
        <nav className="navbars">
        <Link to="/nomination">Nomination</Link>
        </nav>
        <nav className="navbars">
        <Link to="/voting">Voting</Link>
        </nav>
        <nav className="navbars">
        <Link to="/overview">Overview</Link>
        </nav>     
    </div>
    </div>
      );
    }
  }
  