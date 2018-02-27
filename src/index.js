/*jshint esversion: 6 */

import React, { Component } from 'react'; // this library forms components
import ReactDOM from 'react-dom'; // this library renders them
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCxfoip0uVkmHCnHvVXwzasGBmfB6wn9GU';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({ key: API_KEY, term: 'Paul Lynde' }, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos });
    });
  }

// below - passing props to VideoList
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// IN JSX, 'App' is a class, and <App /> is an instance of App. Hmmm
// 'render' takes 2 args - the instance and the location on the page

// A react app is made up of components, each of which renders a block of HTML
// Components are good for re-usability
// One component per file

// npm install --save youtube-api-search

// Downwards data flow - only the most parent component should fetch data
// In this app, index.js is the most parent
