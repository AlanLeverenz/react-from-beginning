import React, { useContext } from 'react';
import ThemeContext from './contexts/themeContext';

// using useContext hook
// function ThemedButton(props){
//     const theme = useContext(ThemeContext);
//     return <h1>{theme}</h1>
// }

// using Consumer (return a function with JSX and callback)
function ThemedButton(props){
    return(
        <ThemeContext.Consumer>
            {(themeContext)=><h1>{themeContext.theme}</h1>}
        </ThemeContext.Consumer>
    )
}

export default ThemedButton;