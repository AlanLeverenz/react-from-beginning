import React, { Component } from 'react';

// we want this component to know about redux.
// to do that, we some help... or some glue
// the glue is react-redux! we need the connect function
import { connect } from 'react-redux';
import updateMeat from '../actions/meatInvUpdate';
import { bindActionCreators } from 'redux';

class MeatDept extends Component {
  increment = (qChange, index) => {
    // console.log(operation, index);
    this.props.updateMeat(qChange, index);
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
              this.increment(1, i);
            }}
            value='+'
          />
          <input
            type='button'
            onClick={() => {
              this.increment(-1, i);
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
      updateMeat: updateMeat,
    },
    dispatch
  );
}
// export default FrozenDept;
// connect takes 2 args, the first one is a function that is going to map a piece of redux state to this components props (mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);

// function x(n) {
//   return (m) => {
//     console.log(n+m);
//     return(j)=>{
//       console.log(n+m+j);
//     }
//   }
// }
// x(1)(2)(3);
