import React from 'react';
import InnerContainer from './InnerContainer';
import ThemeContext from './contexts/themeContext';

// function MainContainer(props){
//     return <InnerContainer />
// }

// Note: must pass an array, not an object, as a React child.

class MainContainer extends React.Component{

    // use in place of MainContainer.contextType = ThemeContext;
    // static belongs to the class itself
    static contextType = ThemeContext;

    render(){
        return (
            <div>
            {this.context.theme} is the current theme. I can see it from Main Container.
                <InnerContainer />
            </div>
        )
    }
}

// use contextType with a class component
// MainContainer.contextType = ThemeContext;

export default MainContainer;