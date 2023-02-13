import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

 const msg = document.getElementById("para").textContent=
 "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click" > CLICK HERE </button>
      <p id ="para"onClick={msg}> </p>
    </div>
  );
}

export default App
