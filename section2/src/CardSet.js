import React, { Component } from 'react';
import Card from './Card';

class CardSet extends Component {
  constructor() {
    super();
    this.state = {
      chosenCards: [],
    };
  }

  saveCourse = (index) => {
    console.log(index);
    // BAD!!! this.state.chosenCards.push(this.props.card[index]) BAD!!!

    const copyOfCards = [...this.state.chosenCards]; // spread operator to copy card items
    copyOfCards.push(this.props.cards[index]); // adds to the copyOfCards
    // const copyOfCards = this.state.chosenCards.slice(); OK
    this.setState({
      chosenCards: copyOfCards,
    });
  };

  render() {
    console.log(this.state.chosenCards);

    const savedCards = this.state.chosenCards.map((card, i) => {
      return <h3 key={i}>{card.course}</h3>;
    });

    const cardList = this.props.cards.map((card, i) => {
      return (
        <div className='col s2' key={i}>
          <Card card={card} />
          <button
            onClick={() => {
              this.saveCourse(i);
            }}
            className='btn waves-light waves-effect'
          >
            Save
          </button>
        </div>
      );
    });

    return (
      <div>
        {cardList}
        {savedCards}
      </div>
    );
  }
}

export default CardSet;

// <div className='card hoverable small'>
// <div className='card-image'>
//   <img alt='card' src={card.image} />
// </div>
// <div className='card-content'>
//   <p>{card.course}</p>
//   <p>{card.instructor}</p>
// </div>
// <div className='card-action'>
//   <a href='#'>$9.99</a>
// </div>
// </div>
