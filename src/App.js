import React, { useState } from 'react';
import './App.css';

function App() {
  let [count , setCount] = useState(0)

  return (
    <div>
      <h3>VALUE OF COUNT IS ::  {count}</h3>
    </div>
  );
}

export default App;
