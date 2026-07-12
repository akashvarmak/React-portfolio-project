import { createContext, useContext, useRef } from 'react';
import './App.css'

//useContext()

//create a constant
//const MyContext = createContext(defaultValue);

//consume a context:
//const contextValue = useContext(MyContext);

// <MyContext.Provider value={somevalue}>
//       <ComponentA/>
//   </MyContext.provider>

 const ThemeContext = createContext('light');


function App() {

  const theme = 'dark';
  return (
    <ThemeContext.Provider value={'dark'}>
    <div style={{border:'2px solid black', padding: '20px' }}>
    <h2>App (parent)</h2>
    <ComponentA/>

    </div>
    </ThemeContext.Provider>

  );

  
}


function ComponentA() {
  return (
    <div style={{border:'2px solid black', padding: '20px' }}>
    <h2>ComponentA (child)</h2>
    <ComponentB />

    </div>

  );
}

function ComponentB() {
   return (
    <div style={{border:'2px solid black', padding: '20px' }}>
    <h2>ComponentB (Grand-child)</h2>
    <ThemedComponent/>

    </div>

  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
   return (
    <div style={{border:'2px solid black', padding: '20px' }}>
    <h2>ThemedComponent (Great-Grand-child)</h2>
    <div>The current theme is: {theme}</div>

    </div>

  );
  
}

export default App
