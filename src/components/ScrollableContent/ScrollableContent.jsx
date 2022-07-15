import React, { Component } from 'react';

class ScrollableContent extends Component {
  render() {
    return (
      <div
        style={{
          overflowY: 'scroll',
          border: '5px solid black',
          height: '400px',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollableContent;
