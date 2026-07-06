import './App.css'
import { useEffect, useState } from 'react';

function App() {

  
const [count, setCount] = useState(0);
const [anotherValue, setAnotherValue] = useState(10);

useEffect(() => {
  console.log('useEffect Triggered')
}, [count]);

const incrementCount = () => {
  setCount(count + 1);
};

  return (

    <div>
      <h1>useEffect</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue + 1)}>Another Value</button>


    </div>

  )
}

export default App
