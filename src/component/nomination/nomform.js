import React, { Component } from "react";



export default class Nomform extends Component {

  constructor(props){
    super(props);

    this.state= {
        name: "",
        address: "",
        phone: ""
    }
}

handlechange = (event) => {
    this.setState({ [event.target.name] : event.target.value})
}


handlesubmit = (event) => {
    alert(JSON.stringify(this.state));
    event.preventdefault();
}


handleReset = (event) => {
    this.setState({ 
      name: "",
      address : "",
      phone: "",
      photo: "",
      symbol: ""
    })
}

handleResetButton = (event) => {
  alert("Reset the value");
  event.preventdefault();
}




    render() {
      return (
        <div className=" container nomination_body">
        <h2>Welocome to Nomination Page</h2>
        <form className="form" onSubmit={this.handlesubmit}  onReset={this.handleReset}>
          <div className="row n_row">
            <div className="col n_col">
            <label for="candidate_name"> Candidate  Name : </label>
            </div>
            <div className="col n_col">
            <input type="text" className="form-control forn_input" id="candidatte_name" name="name"  value={this.state.name} placeholder="Candidate Name" onChange={this.handlechange} required />
            </div>
            </div>

            <div className="row n_row">
            <div className="col n_col">
            <label for="candidate_address"> Candidate Address</label>
            </div>
            <div className="col n_col">
            <textarea className="form-control forn_input" row ="6" id="candidatte_name" name="address" value={this.state.address} placeholder="Candidate Name" onChange={this.handlechange} />
            </div>
            </div>
          
            <div className="row n_row">
            <div className="col n_col">
            <label for="candidate_number"> Candidate Number</label>
            </div>
            <div className="col n_col">
            <input type="number" className="form-control forn_input" id="candidatte_number" name="phone" value={this.state.phone} placeholder="+91" onChange={this.handlechange} />
            </div>
            </div>


            <div className="row n_row">
            <div className="col n_col">
            <label for="candidate_photo"> Candidate Photo : </label>
            </div>
            <div className="col n_col">
            <input type="File" className="form-control forn_input" id="candidatte_photo"  name="photo" value={this.state.photo} placeholder="Candidate Photo" onChange={this.handlechange} />
            </div>
            </div>

            <div className="row n_row">
            <div className="col n_col">
            <label for="candidate_symbol"> Candidate Symbol</label>
            </div>
            <div className="col n_col">
            <input type="file" className="form-control forn_input" id="candidatte_symbol" name="symbol" value={this.state.symbol} placeholder="Candidate Symbol" onChange={this.handlechange} />
            </div>
            </div>

            <div className="row n_row">
            <div className="col n_col">
            <button type="submit"  className="btn_submit" value="Submit">Submit</button>
            </div>
            <div className="col n_col">
            <button type="reset" className="btn_reset" value="reset" onClick={this.hanleResetButton} >Reset</button>
            </div>
            </div>

      </form>
      </div>
      );
    }
  }