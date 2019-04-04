import React from "react";
import "./style.sass";

export const ErrorPresentational = ({ desc, goToIndex }) => {
  return (
    <div className="error">
      <h1 className="error__text">Error</h1>
      <p className="error__desc">{desc}</p>
      <a onClick={goToIndex} className="error__link">
        Learn about Mars without images
      </a>
    </div>
  );
};
