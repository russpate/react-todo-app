import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    constructor(props){
        super(props)
        // also used is set.state but set will trigger render
        // handleChange needs the state from here
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
    addToDo(todo){
        if (todo.length > 0){
            this.props.addToDo(todo);
            // zeros out the value
            this.setState({value:''});
        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="enter item" value={this.state.value} onChange={this.handleChange} />
                <button className="button" onClick={() => this.addToDo(this.state.value)}>Add</button>
            </div>
        );
    }
}
