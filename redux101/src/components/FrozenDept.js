import React, { Component } from 'react';

// we want this component to know about redux.
//  to do that, we some help.. or some glue
// the glue is react-redux! we need the connect function
import { connect } from 'react-redux';

class FrozenDept extends Component {
  render() {
    console.log(this.props.frozenData);
    return <h1>The frozen food department!</h1>;
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

// export default FrozenDept;
// connect takes 2 args, the first one is a function that is going to map a piece of redux state to this components props (matStateToProps)
export default connect(mapStateToProps)(FrozenDept);

// function x(n) {
//   return (m) => {
//     console.log(n+m);
//     return(j)=>{
//       console.log(n+m+j);
//     }
//   }
// }
// x(1)(2)(3);
