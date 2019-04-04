import React, { Component } from "react";
import { ErrorPresentational } from "./ErrorPresentational";
import history from "../../history";

class ErrorContainer extends Component {
  goToIndex = () => {
    history.push("/", true);
  };

  render() {
    return (
      <ErrorPresentational
        goToIndex={this.goToIndex}
        desc={this.props.location.state}
      />
    );
  }
}

export default ErrorContainer;
