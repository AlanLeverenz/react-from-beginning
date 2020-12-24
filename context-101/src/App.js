import React, { useState, useContext } from 'react';
import ThemeContext from './contexts/themeContext';
import MainContainer from './MainContainer'

function App() {

  // MainContainer can get the theme directly from themeContext
  // const theme = useContext(ThemeContext);
  // console.log(theme);

  const [ theme, setTheme ] = useState("Blue");

  return (
    <ThemeContext.Provider value={theme}>
      <h1>App component</h1>
      <button onClick={(e)=>setTheme(theme === "Blue" ? "Red" : "Blue")}>
        {theme === "Blue" ? "Switch to Red" : "Switch to Blue"}
      </button>
      <MainContainer />
      </ThemeContext.Provider>
    );
}

export default App;
