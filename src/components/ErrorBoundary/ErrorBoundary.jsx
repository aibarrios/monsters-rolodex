import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      errorMessage: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong... Please try again later</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
