import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./style.sass";

const ModalImagePresentational = React.forwardRef(
  (
    { img, onExit, onNextSlide, onPrevSlide, isFirstSlide, isLastSlide },
    ref,
  ) => {
    let lastClassName = isLastSlide ? " control--blocked" : "";
    let firstClassName = isFirstSlide ? " control--blocked" : "";
    return (
      <>
        <div className="modal__inner">
          <div className="modal__header">
            <FontAwesomeIcon
              className="modal__icon icon__exit"
              onClick={onExit}
              icon={faTimes}
            />
          </div>
          <img ref={ref} src={img} alt="Curiosity" className="modal__img" />
          <div className="modal__controls">
            <div className={"control control--left" + firstClassName}>
              <FontAwesomeIcon
                className="modal__icon"
                onClick={onPrevSlide}
                icon={faArrowLeft}
              />
            </div>
            <div className={"control control--right" + lastClassName}>
              <FontAwesomeIcon
                className="modal__icon"
                onClick={onNextSlide}
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
        <div className="modal__overlay" />
      </>
    );
  },
);

export default ModalImagePresentational;
