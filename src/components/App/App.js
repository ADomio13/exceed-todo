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
    const { todoInput }  = this.state
    e.preventDefault()
    if(todoInput.trim()){
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
  }

  deleteTodoItem = (id) => {
    this.setState( ({ todos }) => {
      const idx = todos.findIndex( (el) => el.id === id )
      const newArr = [
        ...todos.slice(0, idx),
        ...todos.slice(idx +1)
      ]
      return {
        todos: newArr
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

  selectAll = () => {
    
    this.setState( ({todos}) => {
      const newArr = todos.map( (item) => {
        return {
          ...item,
          active: !item.active,
          completed: !item.completed
        }
      })
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
      <div className="wrapper">
        <AppHeader/>
        <div className="main">
          <TodoList
            onInputChange={this.onInputChange}
            todos={visibleItems}
            onStatusChange={this.onStatusChange}
            addTodoItem={this.addTodoItem}
            deleteTodoItem={this.deleteTodoItem}
            selectAll={this.selectAll}
            inputValue={this.state.todoInput}
          />
          < TodoFooter
            todosCount={todos.length}
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
