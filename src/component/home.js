import React, { Component } from "react";
// import "react-bootstrap";
import "./home.css";
import amit_shah from "./image/amit_shah.jpg";
import manmohansingh from "./image/manmohan_singh.jpg";
import modi from "./image/modi.jpg";
import Rahul from "./image/rahul-gandhi.jpg";
import congress from "./image/congress.png";
import bjp from "./image/bjp.png";


export default class Home extends Component {
    render() {
      return (
        <div className="home_body">
  <h2>Leader</h2>
<div className="container-fluid">
  <div className="container-fluid img_1">
  <img
      src={manmohansingh}
      alt="mamohansingh"
      style={{width: "150px", height: "200px"}}  
    />
    </div>
 
  <div className="container-fluid img_2">
  <img
      src={modi}
      alt="pmmodi"
      style={{width: "150px", height: "200px"}}
    />   
  </div>

  <div className="container-fluid img_3">
  <img
      src={amit_shah}
      alt="amitshah"
      style={{width: "150px", height: "200px"}}
    />
  </div>

  <div className="container-fluid img_4">
  <img
      src={Rahul}
      alt="amitshah"
      style={{width: "150px", height: "200px"}}
    />
  </div>
  <div className="container-fluid img_1">
  <img
      src={manmohansingh}
      alt="mamohansingh"
      style={{width: "150px", height: "200px"}}  
    />
    </div>
    <div className="container-fluid img_2">
  <img
      src={modi}
      alt="pmmodi"
      style={{width: "150px", height: "200px"}}
    />   
  </div>
</div>

  <div className="container-fluid candidate_name"> Man Mohan Singh <img src={congress} alt="congress"
      style={{width: "50px", height: "40px"}} /></div>
  <div className="container-fluid candidate_name"> Narendra Modi <img src={bjp} alt="BJP"
      style={{width: "50px", height: "40px"}} /></div>
  <div className="container-fluid candidate_name"> Amit Shah <img src={bjp} alt="BJP"
      style={{width: "50px", height: "40px"}} /></div>
  <div className="container-fluid candidate_name">Rahul Gandhi <img src={congress} alt="congress"
      style={{width: "50px", height: "40px"}} /></div>
       <div className="container-fluid candidate_name"> Man Mohan Singh <img src={congress} alt="congress"
      style={{width: "50px", height: "40px"}} /></div>
      <div className="container-fluid candidate_name"> Narendra Modi <img src={bjp} alt="BJP"
      style={{width: "50px", height: "40px"}} /></div>
</div>


      );
    }
  }