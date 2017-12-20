import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
    constructor(props){
        super(props)
    }
    removeToDo(id){
        this.props.removeToDo(id);
    }

    render(){
        return(
            <div className="itemWrapper">
                <button className="removeButton" onClick={(e)=>this.removeToDo(this.props.id)}>remove</button>{this.props.todo.text}
            </div>
        )
    }
}
