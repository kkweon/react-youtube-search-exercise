import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
const defaultProps = {
  url: "",
  title: "",
  description: "",
};

export default function VideoDetail({ video }) {
  if (!video) {
    return (
      <div className="col-lg-8">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "70%" }}
        >
          <i className="fa fa-spinner fa-pulse fa-spin fa-5x" />
        </div>
      </div>
    );
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?rel=0`;
  return (
    <div className="video-detail col-lg-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} allowFullScreen />
      </div>
      <div className="card details mt-3">
        <div className="card-body">
          <h4 className="cart-title">{video.snippet.title}</h4>
          <p className="cart-text">{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

VideoDetail.propTypes = propTypes;
VideoDetail.defaultProps = defaultProps;
