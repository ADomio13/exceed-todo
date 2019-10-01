import React, {Component} from 'react'
import './App.css'
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";
import TodoFooter from "../TodoFooter";

class App extends Component {

  maxId = 1
  state = {
    todos: [
      this.createTodoItem('Learn CSS'),
      this.createTodoItem('Learn React js'),
      this.createTodoItem('Learn Node js'),
      this.createTodoItem('Finish Todo')

    ],
    searchTerms: ''
  }

  createTodoItem(name) {
    return {
      name,
      id: this.maxId++,
      active: true,
      completed: false
    }
  }

  render(){
    return (
      <div>
        <AppHeader/>
        <div className="main">
          <TodoList todos={this.state.todos}/>
          <TodoFooter/>
        </div>
      </div>
      )

  }
}

export default App