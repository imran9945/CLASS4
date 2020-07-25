import React, { useState } from 'react';
import './App.css';
import {text} from './text.js';
export default function App() {
  let [count , setCount] = useState(1)
  let [lightoff , setlightoff] = useState(false)
  return (
    <div className={`box ${lightoff ? 'nightlight': ''}`}>
      <h2>NIGHT LIGHT IS {lightoff ? 'ON' : 'OFF'}</h2>
    <text>counter={count}</text>
    <br></br>
    <button onClick={()=> setCount(++count)}>UPDATE COUNTER</button>
    <button onClick={()=>setlightoff(!lightoff)}>TURN NIGHT LIGHT ON/OFF</button>
    </div>
  );
}

