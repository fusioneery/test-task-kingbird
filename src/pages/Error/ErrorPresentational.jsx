import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.sass";

export const ErrorPresentational = ({ desc }) => {
  return (
    <div className="error">
      <h1 className="error__text">Ошибка</h1>
      <p className="error__desc">{desc}</p>
      <Link to="/" className="error__link">
        Вернуться в начало
      </Link>
    </div>
  );
};
