
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const tabs = [{Tab1:"This is the content for Tab1"},
{Tab2:"This is the content for Tab2"},
{Tab3:"This is the content for Tab3"}];

const App = () => {
  const [value, setvalue] = useState("");
  return (
    <div>
        <ul>
          <li onClick={()=>{setvalue(tabs[0].Tab1)}}>Tab 1</li>
          <li onClick={()=>{setvalue(tabs[1].Tab2)}}>Tab 2</li>
          <li onClick={()=>{setvalue(tabs[2].Tab3)}}>Tab 3</li>
        </ul>
        <div>{value}</div>
    </div>
  )
}

export default App
