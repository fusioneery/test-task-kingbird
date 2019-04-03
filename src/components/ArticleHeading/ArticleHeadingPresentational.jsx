import React from "react";
import "./style.sass";

const ArticleHeadingPresentational = ({ small, children }) => {
  return (
    <h2 className={small ? "heading heading--small" : "heading"}>{children}</h2>
  );
};

export default ArticleHeadingPresentational;
