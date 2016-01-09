
import React, { Component } from 'react';

class Bar extends Component {
  render() {
    return (
      <div>Bar {this.props.params.id}</div>
    );
  }
}

export default Bar;
