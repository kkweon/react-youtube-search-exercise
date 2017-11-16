import React from "react";
import PropTypes from "prop-types";

const propTypes = {};
const defaultProps = {};

export default function VideoListItem({ video, onVideoSelect }) {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action"
      onClick={() => onVideoSelect(video)}
    >
      <div className="video-list media">
        <img
          className="media-object align-self-center mr-3"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.default.url}
        />
        <div className="media-body">
          <h5 style={{ fontSize: "0.9rem", wordWrap: "break-word" }}>
            {video.snippet.title}
          </h5>
          <p
            style={{ fontSize: "0.9rem", wordWrap: "break-word" }}
            className="text-muted"
          >
            {video.snippet.description}
          </p>
        </div>
      </div>
    </a>
  );
}

VideoListItem.propTypes = propTypes;
VideoListItem.defaultProps = defaultProps;
