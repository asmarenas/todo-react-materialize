import React, { Component } from 'react';
import InputTodo from './components/inputTodo.js';
import Todo from './components/todo.js';

class App extends Component {
  state = { 
    todo: []
  };
  
  saveTodo = (item) => {
   let newState = [...this.state.todo, item];
    this.setState({todo: newState});
  }
  deleteTodo = (id) => {
   let newTodo = this.state.todo.filter(todo => {
      return todo.id !== id
    });
    this.setState({todo: newTodo});
  }
  render() {
    return (
        <div className="container">
          <div className="row ">
            <div className="col s10 offset-s1 l6 offset-l3">
              <InputTodo saveTodo={this.saveTodo}/>
              <Todo todo={this.state.todo} deleteTodo={this.deleteTodo}/>
            </div>
          </div>
        </div>
    )
  }
}

export default App
