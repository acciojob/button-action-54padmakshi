import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [useState,setstate] = useState();


  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click" > CLICK HERE </button>
      <p id ="para"> "Hello, I've learnt 
      to use the full-stack
       evaluation tool. This makes me so happy"</p>
    </div>
  );
}

export default App
