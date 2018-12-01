import React from 'react';

class InputTodo extends React.Component {
    state = {
        todo: {content: "" , id: 1}
    }
    handleChange = (e) => {
      this.setState({todo:{content: e.target.value, id:Math.random(2)}});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveTodo(this.state.todo);
        this.setState({todo:{content: ""}});
    }
    render(){
        return (
            <div className="row">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <div className=" input-field col s11 text-red ">
                        <div className="input-field">
                            <input  id="todo" type="text" className="red-text" onChange={this.handleChange} value={this.state.todo.content} required/>
                            <label htmlFor="todo">todo</label>
                        </div>
                    </div>
                    <div className="col s1">
                        <button  id="btn" className="btn-floating waves-effect waves-light red">
                            <i className="material-icons">add</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default InputTodo
