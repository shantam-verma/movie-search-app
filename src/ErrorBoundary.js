import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Fetching", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="text-center mt-5">Error: {this.state.error.message}</h1>
      );
    }
    return this.props.children;
  }
}
