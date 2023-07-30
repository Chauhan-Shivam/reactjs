import './App.css';
import { useState } from 'react';
function App() {
  let blue = '#6170fb';
  const [bgColor, setBgColor] = useState(blue);
   const changeColor =()=>{
      let purple = '#A020F0';
      if(bgColor == blue)
      setBgColor(purple);
      else
      setBgColor(blue);
    }
  return (
    <div className="App">
      <header className="App-header" style={{background: bgColor}}>
        <button onClick={changeColor}>click here!</button>
      </header>
    </div>
  );
}

export default App;