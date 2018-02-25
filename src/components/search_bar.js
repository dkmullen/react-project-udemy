/*jshint esversion: 6 */

// Remember that JSX complies to react commands, so we need to import React
// even if we don't call it

import React, { Component } from 'react';

class SearchBar extends Component {
  render() { // every class in React needs a render function
    return <input onChange={this.onInputChange} />; // and render needs to return JSX
  }

  onInputChange(event) {
    console.log(event);
  }
}

export default SearchBar;

// {Component} in import = const Component = React.Component;
// extends means SearchBar gets all the props of Component, Plus what I add

/*
The above is a class-based component. A simplier and less-powerful way is the
functional component, which should be used by default, unless there is a reason
to escalate: const SearchBar = () => { return <input /> }

onChange - change is a plain HTML event; All we have to do to access it in
React is have on + the event, then {pointer to our method};
*/
