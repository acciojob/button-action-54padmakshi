import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [msg, setMsg] = useState("");
const handleClick = () => {
  setMsg("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
}
 

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}> CLICK HERE </button>
<p className="show" id ="para">{msg}</p>
    </div>
  );
}

export default App
