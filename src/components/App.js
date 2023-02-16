import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

const handleClick = () => {
  document.getElementById("para").className="show";
  
}
 

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}> CLICK HERE </button>
    
       <p id ="para" className="hide">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p></div>
   
  );
}

export default App;
