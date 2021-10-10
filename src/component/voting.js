import React, { Component } from "react";
import "./voting.css";
import amit_shah from "./image/amit_shah.jpg";
import manmohansingh from "./image/manmohan_singh.jpg";
import modi from "./image/modi.jpg";
import Rahul from "./image/rahul-gandhi.jpg";
import congress from "./image/congress.png";
import bjp from "./image/bjp.png";

export default class Voting extends Component {
    render() {
      return (
      <div className="voting_body">
        <h2>Please Select your Candidate</h2>
        <form>   
              <div className="Vote_ing">
            <label htmlFor="modi" className="v_label"> 
               <img src={modi} alt="pmmodi" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Narendra Modi
            </label>
            <input type="radio" name="candidate" id="modi" value="Narendra Modi" className="v_input"/>  

            <label htmlFor="amitshah" className="v_label"><img src={amit_shah} alt="amit shah" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Amit Saha</label>
            <input type="radio" name="candidate" id="amitshah" value="Amit Shah" className="v_input"/>
     

            <label htmlFor="manmohansingh" className="v_label"><img src={manmohansingh} alt="manmohan singh" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> ManMohan Singh</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            
            </div><br/>


            <div className="Vote_ing">
            <label htmlFor="manmohansingh" className="v_label"><img src={Rahul} alt="Rahul Gandhi" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> Rahul Gandhi</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
 

            <label htmlFor="modi" className="v_label"> 
               <img src={modi} alt="pmmodi" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Narendra Modi
            </label>
            <input type="radio" name="candidate" id="modi" value="Narendra Modi" className="v_input"/> 

  
            <label htmlFor="amitshah" className="v_label"><img src={amit_shah} alt="amit shah" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Amit Saha</label>
            <input type="radio" name="candidate" id="amitshah" value="Amit Shah" className="v_input"/>
            </div><br/>

            <div className="Vote_ing">
            <label htmlFor="manmohansingh" className="v_label"><img src={manmohansingh} alt="manmohan singh" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> ManMohan Singh</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            <label htmlFor="manmohansingh" className="v_label"><img src={Rahul} alt="Rahul Gandhi" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> Rahul Gandhi</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            <label htmlFor="modi" className="v_label"> 
               <img src={modi} alt="pmmodi" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Narendra Modi
            </label>
            <input type="radio" name="candidate" id="modi" value="Narendra Modi" className="v_input"/> 
            </div><br/>

            <div className="Vote_ing">
            <label htmlFor="amitshah" className="v_label"><img src={amit_shah} alt="amit shah" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Amit Saha</label>
            <input type="radio" name="candidate" id="amitshah" value="Amit Shah" className="v_input"/>
            <label htmlFor="manmohansingh" className="v_label"><img src={manmohansingh} alt="manmohan singh" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> ManMohan Singh</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            <label htmlFor="manmohansingh" className="v_label"><img src={Rahul} alt="Rahul Gandhi" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> Rahul Gandhi</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            </div><br/>

            <div className="Vote_ing"> 
            <label htmlFor="modi" className="v_label"> 
               <img src={modi} alt="pmmodi" style={{width: "100px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Narendra Modi
            </label>
            <input type="radio" name="candidate" id="modi" value="Narendra Modi" className="v_input"/>   
            <label htmlFor="amitshah" className="v_label"><img src={amit_shah} alt="amit shah" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Amit Saha</label>
            <input type="radio" name="candidate" id="amitshah" value="Amit Shah" className="v_input"/>
            <label htmlFor="manmohansingh" className="v_label"><img src={manmohansingh} alt="manmohan singh" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> ManMohan Singh</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            </div><br/>
            
            
            <div className="Vote_ing"> 
            <label htmlFor="manmohansingh" className="v_label"><img src={Rahul} alt="Rahul Gandhi" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> Rahul Gandhi</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            <label htmlFor="modi" className="v_label"> 
               <img src={modi} alt="pmmodi" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Narendra Modi
            </label>
            <input type="radio" name="candidate" id="modi" value="Narendra Modi" className="v_input"/>   
            <label htmlFor="amitshah" className="v_label"><img src={amit_shah} alt="amit shah" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Amit Saha</label>
            <input type="radio" name="candidate" id="amitshah" value="Amit Shah" className="v_input"/>
            </div><br/>

            <div className="Vote_ing"> 
            <label htmlFor="manmohansingh" className="v_label"><img src={manmohansingh} alt="manmohan singh" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> ManMohan Singh</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            <label htmlFor="manmohansingh" className="v_label"><img src={Rahul} alt="Rahul Gandhi" style={{width: "125px", height: "150px"}}/><img src={congress} alt="congress"
      style={{width: "55px", height: "40px"}} /> Rahul Gandhi</label>
            <input type="radio" name="candidate" id="manmohansingh" value="Man Mohan Singh" className="v_input"/>
            <label htmlFor="modi" className="v_label"> 
               <img src={modi} alt="pmmodi" style={{width: "125px", height: "150px"}}/><img src={bjp} alt="BJP"
      style={{width: "55px", height: "40px"}} /> Narendra Modi
            </label>
            <input type="radio" name="candidate" id="modi" value="Narendra Modi" className="v_input"/>   
            </div>
           <br></br>
           <br></br>

            <input className="v_button" type="submit" value="Vote" />
            <br/>
            <br/>
                    </form>
                  <br></br>
                  <br></br>
      </div>
      );
    }
  }