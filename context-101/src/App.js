import React, { useContext} from 'react';
import ThemeContext from './contexts/themeContext';
import MainContainer from './MainContainer'

function App() {

  // MainContainer can get the theme directly from themeContext
  const theme = useContext(ThemeContext);
  console.log(theme);

  return (
    <div>
      <h1>App component</h1>
      <MainContainer />
    </div>

    );
}

export default App;
