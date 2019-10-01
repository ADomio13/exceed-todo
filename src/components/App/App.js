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
    currentFilter: 'all',
  }

  createTodoItem(name) {
    return {
      name,
      id: this.maxId++,
      active: true,
      completed: false
    }
  }

  onStatusChange = (id) => {
    const {todos} = this.state
    const idx = todos.findIndex( (el) => el.id === id )
    const newTodo = [...todos.slice(0, idx)]
    console.log(newTodo)
  }

  onFilterChange = async (e) => {
    console.log('clicked on', e.target.id)
    await this.setState({
      currentFilter: e.target.id
    })
    console.log(this.state.currentFilter)
  }

  render(){
    return (
      <div>
        <AppHeader/>
        <div className="main">
          <TodoList onStatusChange={this.onStatusChange} todos={this.state.todos}/>
          <TodoFooter
            currentFilter={this.state.currentFilter}
            onFilterClick={this.onFilterChange}
          />
        </div>
        <div className="second"/>
        <div className="third"/>
      </div>
      )
  }
}

export default App