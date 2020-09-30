import React, { Component } from 'react';
import updateMeat from '../actions/meatInvUpdate';

// we want this component to know about redux.
// to do that, we some help... or some glue
// the glue is react-redux! we need the connect function
import { connect } from 'react-redux';

class MeatDept extends Component {
  increment = (operation, index) => {
    // console.log(operation, index);
    if (operation === '+') {
    } else if (operation === '-') {
    }
  };

  render() {
    const meatInventory = this.props.meatData.map((item, i) => {
      return (
        <div key={i}>
          <li>
            {item.food}: {item.quantity}
          </li>
          <input
            type='button'
            onClick={() => {
              this.increment('+', i);
            }}
            value='+'
          />
          <input
            type='button'
            onClick={() => {
              this.increment('-', i);
            }}
            value='-'
          />
        </div>
      );
    });
    return (
      <div>
        <h1>The meat department!</h1>
        <ul>{meatInventory}</ul>
      </div>
    );
  }
}

// console.log(connect);
// mapStateToProps takes 1 arg, "state" and that is the rootReducer/Store
function mapStateToProps(state) {
  // mapStateToProps returns an object, with:
  // property is the local prop name to this component
  // value will be the property in the root reducer... ie., a piece of the store
  return {
    meatData: state.meat,
  };
}

// export default FrozenDept;
// connect takes 2 args, the first one is a function that is going to map a piece of redux state to this components props (mapStateToProps)
export default connect(mapStateToProps)(MeatDept);

// function x(n) {
//   return (m) => {
//     console.log(n+m);
//     return(j)=>{
//       console.log(n+m+j);
//     }
//   }
// }
// x(1)(2)(3);
