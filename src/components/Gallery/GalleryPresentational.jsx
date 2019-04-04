import React from "react";
import Slide from "../Slide/SlidePresentational";
import "./style.sass";
import ModalImage from "../ModalImage/ModalImageContainer";

const GalleryPresentational = ({
  imgs,
  onSlideClick,
  modalImgIndex,
  onNextImage,
  onPrevImage,
  onClose,
}) => {
  const slides = imgs.map((el, i) => (
    <Slide onSlideClick={() => onSlideClick(i)} img={el} key={i} />
  ));
  return (
    imgs.length > 0 && (
      <>
        <div className="gallery">
          <div className="slides">{slides}</div>
        </div>
        {modalImgIndex !== -1 && (
          <ModalImage
            onNextSlide={onNextImage}
            onPrevSlide={onPrevImage}
            onExit={onClose}
            img={imgs[modalImgIndex]}
            isFirstSlide={modalImgIndex === 0}
            isLastSlide={imgs.length - 1 === modalImgIndex}
          />
        )}
      </>
    )
  );
};

export default GalleryPresentational;
