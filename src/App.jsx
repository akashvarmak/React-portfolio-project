import { useState, useRef, useEffect } from 'react';
import './App.css'

//useRef
// persist values across renders
// does not cause the components to re-render when the value changes

//current is the variable inside the object of useRef, gpt this

function App() {

  const[stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  useEffect( () => {
    console.log('component Re-rendered');
  })

  const incrementStateCount = () => {
    setStateCount(stateCount + 1);
  }

  const incrementRefCount = () => {
    refCount.current += 1;
    console.log(`Ref count : ${refCount.current}`);
  }




  return (
 
    <div>
      <p>State Count: {stateCount}</p>
      <button onClick={incrementStateCount}>Increment</button>

      <p>State Count: {refCount.current}</p>
      <button onClick={incrementRefCount}>Increment</button>
    </div>



  )

  
}
export default App
