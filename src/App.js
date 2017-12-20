import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import TodoInput from './components/todoInput.js'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos:[
                {id: 0, text: "learn react"},
                {id: 1, text: "build something"},
                {id: 2, text: "win"}
            ],
            nextId: 3
        }
        // keeps the context as the function gets passed around
        this.addToDo = this.addToDo.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
    }

    addToDo(todoText){
        console.log("ToDo Text:", todoText);
    }
    removeToDo(id){
        console.log("Remove Text:", id);
    }
    render() {
    return (
      <div className="App">
          <div className="wrapper">
              <div className="wrapper--inner">
                  <Header />
                  <TodoInput todoText="" addToDo={this.addToDo}/>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
