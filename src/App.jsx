import { createContext, useContext, useRef, useState } from 'react';
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
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      //defualt outside provider
     <GlobalComponent/>

    //Hirarchy of internal components change
    <ThemeContext.Provider value={theme}>
    <div style={{border:'2px solid black', padding: '20px' }}>
    <h2>App (parent)</h2>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <ComponentA/>
    </div>
    </ThemeContext.Provider>

    // provider with our custom value
    <ThemeContext.Provider value='dark'>
      <GlobalComponent/>
    </ThemeContext.Provider>

    </div>

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


function GlobalComponent() {
  const theme = useContext(ThemeContext);
   return (
    <div style={{border:'2px solid purple', padding: '20px' }}>
    <h2>GlobalComponent (outside provider)</h2>
    <div>The current theme is: {theme}</div>

    </div>

  );
  
}

export default App
