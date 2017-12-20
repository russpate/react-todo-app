import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import TodoInput from '.components/todoInput.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
