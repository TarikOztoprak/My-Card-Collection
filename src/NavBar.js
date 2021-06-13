import React from "react";
import ReactDOM from "react-dom";
import Make from "./Make";
import "./App.js"
function make() {
    ReactDOM.render(
      <React.StrictMode>
        <Make />
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
function NavBar() {
    return(
    <div className="NavBar">
      
      <a href="./"> <h1 className="left center">My Card Collection</h1></a>
      <button onClick={make} className="right createButton">Create</button>

    </div>
    );
}

export default NavBar;