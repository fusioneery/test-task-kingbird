import React, { Component } from "react";
import GalleryPresentational from "./GalleryPresentational";

class GalleryContainer extends Component {
  constructor() {
    super();
    this.state = {
      modalImgIndex: -1,
    };
  }

  viewImage = index => {
    this.setState({ modalImgIndex: index });
  };

  clearImage = () => {
    this.setState({ modalImgIndex: -1 });
  };

  nextImage = () => {
    if (this.props.imgs.length - 1 >= this.state.modalImgIndex + 1) {
      this.setState({ modalImgIndex: this.state.modalImgIndex + 1 });
    }
  };

  prevImage = () => {
    if (this.state.modalImgIndex > 0) {
      this.setState({ modalImgIndex: this.state.modalImgIndex - 1 });
    }
  };

  render() {
    return (
      <GalleryPresentational
        onClose={this.clearImage}
        onNextImage={this.nextImage}
        onPrevImage={this.prevImage}
        imgs={this.props.imgs}
        modalImgIndex={this.state.modalImgIndex}
        onSlideClick={this.viewImage}
      />
    );
  }
}

export default GalleryContainer;
