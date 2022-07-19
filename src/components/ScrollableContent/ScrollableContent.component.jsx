import React, { Component } from 'react';
import './ScrollableContent.styles.css';

class ScrollableContent extends Component {
  render() {
    return <div className='scroll-container'>{this.props.children}</div>;
  }
}

export default ScrollableContent;
