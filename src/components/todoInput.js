import React from 'react'

export default class TodoInput extends React.Components{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <input type="text" value="" onChange={this.handleChange} />
                <button className="button" onClick={() => this.addToDo(this.state.value)}>Submit<button />
            </div>
        );
    }
}
