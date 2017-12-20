import React from 'react';
import './todoInput.css';

export default class TodoInput extends React.Component {
    constructor(props){
        super(props)
        // also used is set.state but set will trigger render
        this.state = {value: "foo"};

        this.handleChange = this.handleChange.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    handleChange(param){
        console.log("boom changed");
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
                <input type="text" value="" onChange={this.handleChange} />
                <button className="button" onClick={() => this.addToDo(this.state.value)}>Add</button>
            </div>
        );
    }
}
