import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAp71WpkMc3ljpyUTzd85DeNgM_ifh9jbQ";
const searchYoutube = (term, callback) => {
  YTSearch({ key: API_KEY, term: term }, callback);
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    searchYoutube("React", videos => {
      console.log(videos);
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });

    this.searchVideo = this.searchVideo.bind(this);
  }

  searchVideo(term) {
    searchYoutube(term, videos => {
      this.setState({ videos });
    });
  }

  render() {
    /* this function can only be called after 300 from last call*/
    const videoSearch = _.debounce(term => {
      this.searchVideo(term);
    }, 300);
    return (
      <div className="mt-3">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="display-4">Youtube Search App</h1>
          </div>
        </div>
        <div className="row">
          <SearchBar
            onVideoChange={videoSearch}
            onVideoSearch={this.searchVideo}
          />
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
