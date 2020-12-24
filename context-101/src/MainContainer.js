import React, { useContext } from 'react';
import ThemeContext from './contexts/themeContext';

function MainContainer(props){
    const theme = useContext(ThemeContext);
    return <h1>{theme}</h1>
}

export default MainContainer;