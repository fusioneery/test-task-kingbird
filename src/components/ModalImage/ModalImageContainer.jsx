import React from "react";
import ReactDOM from "react-dom";
import ModalImagePresentational from "./ModalImagePresentational";
import { touchStart, touchMove } from "../../helpers/zoom";

const modalRoot = document.getElementById("modal-root");

class ModalImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.classList.add("modal");
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
    let el = this.imgRef.current;
    el.addEventListener("touchstart", touchStart);
    el.addEventListener("touchmove", touchMove);
  }

  componentWillUnmount() {
    let el = this.imgRef.current;
    el.removeEventListener("touchstart", touchStart);
    el.removeEventListener("touchmove", touchMove);
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalImagePresentational
        isFirstSlide={this.props.isFirstSlide}
        isLastSlide={this.props.isLastSlide}
        onNextSlide={this.props.onNextSlide}
        onPrevSlide={this.props.onPrevSlide}
        onExit={this.props.onExit}
        img={this.props.img}
        ref={this.imgRef}
      />,
      this.el,
    );
  }
}

export default ModalImageContainer;
