import { useRef } from 'react';
import './App.css'

//useRef
// persist values across renders
// does not cause the components to re-render when the value changes

//current is the variable inside the object of useRef, gpt this

function App() {
  const inputRef = useRef(null);
  const inputRefNext = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';

  }

  const focusInputNext = () => {
    inputRefNext.current.focus();
    inputRefNext.current.style.backgroundColor = 'yellow';

  }

   const resetFocus = () => {
    inputRefNext.current.style.backgroundColor = 'white';
    inputRef.current.style.backgroundColor = 'white';


  }


  return (

    <div>
      <h1>Learn React</h1>
      <input type='text' ref={inputRef} plaveholder='Focus me'></input>
      <button onClick={focusInput}>Focus and Highlight</button>

      <input type='text' ref={inputRefNext} plaveholder='Focus me'></input>
      <button onClick={focusInputNext}>Focus and Highlight</button>

      <button onClick={resetFocus}>reset</button>


      
    </div>

  )

  
}
export default App
