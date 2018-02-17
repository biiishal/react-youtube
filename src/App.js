import React, { Component } from 'react';
import './App.css';
import YTSearch from 'youtube-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyA7y_9cyGwq9kDQpC3PmnQajThCxGgJp9M"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTSearch('sadhguru', {maxResults: 7, key: API_KEY, type: 'video'}, (err, results) => {
      if(err) return console.log(err);

      console.dir(results);
      this.setState({
        videos: results,
        selectedVideo: results[0]
      })
    })
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6">
            <SearchBar />
          </div>

          <div className="row">
            <div className="col-md-8">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-4">
              <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
