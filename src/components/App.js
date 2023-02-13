import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
const [msg, setMsg] = useState("");
const [showmsg,setShowMsg]= useState(false);
const handleClick = () => {
  setMsg("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  setShowMsg(true);
}
 

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <button id="click" onClick={handleClick}> CLICK HERE </button>
      <div className={`msg ${setShowMsg ? false: true}`}>
       <p id ="para">{msg}</p></div>
    </div>
  );
}

export default App
