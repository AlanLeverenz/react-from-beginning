import React, { Component } from 'react';
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

// we want this component to know about redux.
// to do that, we some help... or some glue
// the glue is react-redux! we need the connect function

class FrozenDept extends Component {
  increment = (operation, index) => {
    // console.log(operation, index);
    this.props.updateFrozen(operation, index);
  };

  render() {
    const frozenInventory = this.props.frozenData.map((item, i) => {
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
        <h1>The frozen food department!</h1>
        <ul>{frozenInventory}</ul>
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
    frozenData: state.frozen,
  };
}

// mapDispatchToProps is how we tie our component to the dispatch
// takes 1 arg: dispatch
function mapDispatchToProps(dispatch) {
  // this function returns, bindActionCreators
  // and we hand bindActionCreators an object:
  // each property will be a local property
  // each value will be a function that is dispatch when we run
  // 2nd arg or bindActionCreators is the dispatch
  return bindActionCreators(
    {
      updateFrozen: updateFrozen,
    },
    dispatch
  );
}

// export default FrozenDept;
// connect takes 2 args, the first one is a function that is going to map a piece of redux state to this components props (mapStateToProps)
// 2nd arg to connect: mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);

// function x(n) {
//   return (m) => {
//     console.log(n+m);
//     return(j)=>{
//       console.log(n+m+j);
//     }
//   }
// }
// x(1)(2)(3);
