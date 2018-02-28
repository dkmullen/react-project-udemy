/*jshint esversion: 6 */

// Remember that JSX complies to react commands, so we need to import React
// even if we don't call it

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) { // constructor always called when a new instance of class is made
    super(props);  // calls properties of the parent class (Component)
    // The following simply sets our state object to record the search term
    // entered in our SearchBar; starts with '', changes with each entry
    this.state = { term: '' };
  }
  render() { // every class in React needs a render function and render needs to return JSX
    // Set the state (ie, change the value) with this.setState
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // Has state set a default value.
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// {Component} in import = const Component = React.Component;
// extends means SearchBar gets all the props of Component, Plus what I add

/*
The above is a class-based component. A simplier and less-powerful way is the
functional component, which should be used by default, unless there is a reason
to escalate: const SearchBar = () => { return <input /> } Use class when state is needed.

onChange - change is a plain HTML event; All we have to do to access it in
React is have on + the event, then {pointer to our method}; Could be onClick,
onMouseOver, etc.
*/

// State - a plain JS object used to record, react to user events
// Each class-based component has a state object
// When component is changed, it re-renders, and also re-renders all its children

// Functional components don't have state

// JS inside JSX needs {} around it
