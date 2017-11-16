import React from "react";
import PropTypes from "prop-types";
import VideoListItem from "./video_list_item";

const propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      etag: PropTypes.string,
      id: PropTypes.object,
      kind: PropTypes.string,
      snippet: PropTypes.object,
    }),
  ),
};
const defaultProps = {
  videos: [],
};

export default function VideoList(props) {
  return (
    <div className="col-lg-4">
      <div className="list-group">
        {props.videos.map(v => (
          <VideoListItem
            onVideoSelect={props.onVideoSelect}
            video={v}
            key={v.etag}
          />
        ))}
      </div>
    </div>
  );
}

VideoList.propTypes = propTypes;
VideoList.defaultProps = defaultProps;
