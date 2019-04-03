import React from "react";
import history from "../../history";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
    history.push("/error");
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
