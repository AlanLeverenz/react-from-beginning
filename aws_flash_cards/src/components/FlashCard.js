import React, { Component } from 'react';
import MultiCard from './MultiCard';
import RegularCard from './RegularCard';
import RandomWeighted from './RandomWeighted';

class FlashCard extends Component {
  constructor() {
    super();
    this.state = {
      flipClass: '',
    };
  }

  // setState when flashcard is clicked
  flip = (e) => {
    let newFlip = this.state.flipClass === '' ? 'flip' : '';
    this.setState({
      flipClass: newFlip,
    });
  };

  render() {
    return (
      <div className='row align-items-center card-holder'>
        <div
          onClick={this.flip}
          className={`col-sm-6 offset-sm-3 card mb-3 ${this.state.flipClass}`}
        >
          <RegularCard />
        </div>
      </div>
    );
  }
}

export default FlashCard;
