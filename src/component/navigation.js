import React, { Component } from "react";
// import "react-bootstrap";
import "./navigation.css";

export default class Navbar extends Component {
    render() {
      return (
        <div className="navigation">
        <div className="nav_postion">
        <nav className="navbars">
          <a href="/">Home</a>
        </nav>
        <nav className="navbars">
        <a href="/nomination">Nomination</a>
        </nav>
        <nav className="navbars">
        <a href="/voting">Voting</a>
        </nav>
        <nav className="navbars">
        <a href="/overview">Overview</a>
        </nav>     
    </div>
    </div>
      );
    }
  }
  