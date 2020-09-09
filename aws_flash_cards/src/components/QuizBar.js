import React from 'react';
import QuizType from './QuizType';

// https://github.com/FortAwesome/react-fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome

function QuizBar(props) {
  return (
    <div className='quiz-bar'>
      <h1>Choose your study type</h1>
      <ul className='nav nav-pills nav-fill'>
        <QuizType />
      </ul>
    </div>
  );
}

export default QuizBar;
