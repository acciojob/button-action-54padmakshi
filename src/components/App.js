import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [msg, setMsg] = useState(true);
const handleClick = () => {
  setMsg(false);
}

 

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}> CLICK HERE </button>
{msg ? "" :       <p id ="para"> "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>
}
    </div>
  );
}

export default App
