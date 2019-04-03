import React from "react";
import "./style.sass";

const ArticleTextPresentational = ({ children, offset }) => {
  return <p className={offset ? "text text--offset" : "text"}>{children}</p>;
};

export default ArticleTextPresentational;
