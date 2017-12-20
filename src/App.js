import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import TodoInput from './components/todoInput.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="wrapper">
              <div className="wrapper--inner">
                  <Header />
                  <TodoInput />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
