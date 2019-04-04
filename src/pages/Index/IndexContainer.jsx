import React, { Component } from "react";
import { IndexPresentational } from "./IndexPresentational";
import axios from "axios";
import { API_ENDPOINT } from "../../helpers/constants";
import history from "../../history";

class IndexContainer extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  componentDidMount = () => {
    console.log(this.props.location.state);
    // if (!this.props.location.state) {
    axios
      .get(API_ENDPOINT)
      .then(data => {
        console.log(data.data);
        this.setState({
          images: data.data.photos.map(photo => photo.img_src),
        });
      })
      .catch(err => {
        console.log(err);
        let reason =
          err.response.status === 429
            ? "is tired of giving images."
            : "experiencing some problems :(";

        history.push("/error", "NASA API " + reason);
      });
    // }
  };

  render() {
    return <IndexPresentational images={this.state.images} />;
  }
}

export default IndexContainer;
