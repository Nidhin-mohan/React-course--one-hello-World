import React from "react";
import "./style.css";

import Button from "./Button";

const  App = () => {
    return (
      <>
        <h1 style={{ textAlign: "center", color: "green" }}>Hello World</h1>
        {/* <button className='btn' >Click Me</button> */}
        <Button title= "App store"/>
        <Button/>
      </>
    ); 
}

export default App;

