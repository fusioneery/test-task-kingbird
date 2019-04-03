import React from "react";
import { Link } from "react-router-dom";
import "./style.sass";

export const NotFoundPresentational = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__text">Здесь ничего нет.</h1>
      <Link to="/" className="not-found__link">
        Вернуться назад
      </Link>
    </div>
  );
};
