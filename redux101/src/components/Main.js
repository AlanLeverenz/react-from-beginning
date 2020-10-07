import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    const frozenQuantity = this.props.frozenData.reduce(
      (accum, frozenItem) => accum + frozenItem.quantity,
      0
    );
    const meatQuantity = this.props.meatData.reduce(
      (accum, meatItem) => accum + meatItem.quantity,
      0
    );
    const produceQuantity = this.props.produceData.reduce(
      (accum, produceItem) => accum + produceItem.quantity,
      0
    );
    return (
      <div>
        <h2>FrozenDept: {frozenQuantity}</h2>
        <h2>MeatDept: {meatQuantity}</h2>
        <h2>ProduceDept: {produceQuantity}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
    meatData: state.meat,
    produceData: state.produce,
  };
}

export default connect(mapStateToProps)(Main);
