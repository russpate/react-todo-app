import React from 'react'

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
        console.log("boom added", todo)
    }
    render(){
        return(
            <div>
                <input type="text" value="" onChange={this.handleChange} />
                <button className="button" onClick={() => this.addToDo(this.state.value)}>Submit</button>
            </div>
        );
    }
}
