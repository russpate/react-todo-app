import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import TodoInput from './components/todoInput.js'
import TodoItem from './components/todoItem.js'

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
        let todos = this.state.todos.slice();
        todos.push({id: this.state.nextId, text: todoText});
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        })
    }
    removeToDo(id){
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        })
    }
    render() {
    return (
      <div className="App">
          <div className="wrapper">
              <div className="wrapper--inner">
                  <Header />
                  <TodoInput todoText="" addToDo={this.addToDo}/>
                  <ul>
                    {
                        this.state.todos.map((todo) => {
                            // key is mandatory by react
                            return <TodoItem todo={todo} key={todo.id} id={todo.id} removeToDo={this.removeToDo} />
                        })
                    }
                  </ul>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
