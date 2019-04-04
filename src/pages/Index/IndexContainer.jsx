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
    if (!this.props.location.state) {
      axios
        .get(API_ENDPOINT)
        .then(data => {
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
    }
  };

  render() {
    return <IndexPresentational images={this.state.images} />;
  }
}

export default IndexContainer;
