import React, { Component } from 'react';
import Movies from './components/movies.js'
import './App.css';
import Menu from './components/menu.js';

class App extends Component {
  render() {
    return (
      <div><br />
        <Menu />
        {this.props.children}
      </div>
    );
  }
}


export default App;
