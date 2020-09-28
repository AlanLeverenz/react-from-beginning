import React, { Component } from 'react';

// we want this component to know about redux.
//  to do that, we some help.. or some glue
// the glue is react-redux! we need the connect function
import { connect } from 'react-redux';

class FrozenDept extends Component {
  render() {
    return <h1>The frozen food department!</h1>;
  }
}

// export default FrozenDept;
export default connect()(FrozenDept);

// function x(n) {
//   return (m) => {
//     console.log(n+m);
//     return(j)=>{
//       console.log(n+m+j);
//     }
//   }
// }
// x(1)(2)(3);
