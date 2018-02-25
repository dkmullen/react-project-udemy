/*jshint esversion: 6 */

import React from 'react'; // this library forms components
import ReactDOM from 'react-dom'; // this library renders them

import SearchBar from './components/search_bar';

// const API_KEY = 'AIzaSyCxfoip0uVkmHCnHvVXwzasGBmfB6wn9GU';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};



ReactDOM.render(<App />, document.querySelector('.container'));

// IN JSX, 'App' is a class, and <App /> is an instance of App. Hmmm
// 'render' takes 2 args - the instance and the location on the page

// A react app is made up of components, each of which renders a block of HTML
// Components are good for re-usability
// One component per file

// npm install --save youtube-api-search
