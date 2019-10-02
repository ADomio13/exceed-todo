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
    todoInput: ''
  }

  onFilterChange = (e) => {
    this.setState({
      currentFilter: e.target.id

    })
  }
  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter( (item) => item.active)
      case 'completed':
        return items.filter( (item) => item.completed)
      default:
        return items
    }
  }

  createTodoItem(name) {
    return {
      name,
      id: this.maxId++,
      active: true,
      completed: false
    }
  }

  addTodoItem = (e) => {
    console.log()
    e.preventDefault()
    const newItem = this.createTodoItem(this.state.todoInput)
    this.setState( ({todos}) => {
      const newArr = [
        ...todos,
        newItem
      ]
      return {
        todos: newArr,
        todoInput: ''
      }
    })
  }

  onInputChange = (e) => {
    this.setState({
      todoInput: e.target.value
    })
  }

  onStatusChange = (id) => {
    this.setState( ({ todos }) => {
      const idx = todos.findIndex( (el) => el.id === id)
      const oldItem = todos[idx]
      const newItem = {...oldItem, completed: !oldItem.completed, active: !oldItem.active}
      const newArr = [
        ...todos.slice(0, idx),
        newItem,
        ...todos.slice(idx + 1)
      ]
      return {
        todos: newArr
      }
    })
  }

  onClearCompleted = () => {
    const newArr = [...this.state.todos]
    const activeItems = newArr.filter( (el) => el.active)
    this.setState( ({todos}) => {
      return {
        todos: activeItems
      }
    })
  }

  render(){
    const {todos, currentFilter} = this.state
    const todosLeft = todos.length - todos.filter( (el)=> el.completed).length

    const visibleItems = this.filter(todos, currentFilter)

    return (
      <div>
        <AppHeader/>
        <div className="main">
          <TodoList
            onInputChange={this.onInputChange}
            todos={visibleItems}
            onStatusChange={this.onStatusChange}
            addTodoItem={this.addTodoItem}
            inputValue={this.state.todoInput}
          />
          <TodoFooter
            todosLeft={todosLeft}
            currentFilter={this.state.currentFilter}
            filterClick={this.onFilterChange}
            clearCompleted={this.onClearCompleted}
          />
        </div>
        <div className="second"/>
        <div className="third"/>
      </div>
      )
  }
}

export default App
