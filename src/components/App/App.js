import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import AppHeader from "../AppHeader"
import TodoList from "../TodoList"
import TodoFooter from "../TodoFooter"
import UserPanel from '../UserPanel'
import Register from '../Register'
import Login from '../Login'
import todoService from '../../api/todoService'

class App extends Component {

  todoService = new todoService()

  state = {
    todos: [
      // this.createTodoItem(1, 'Learn CSS'),
      // this.createTodoItem(2, 'Learn React js'),
      // this.createTodoItem(3, 'Learn Node js'),
      // this.createTodoItem(4, 'Finish Todo')
    ],
    currentFilter: 'all',
    todoInput: '',
    currentCheck: true
  }

  componentDidMount() {
    this.getTodosFromDB()
  }


  async getTodosFromDB() {
    const res = await this.todoService.getAllTodos()
    const newArr = res.map( (item) => {
      return {
        name: item.name,
        id: item._id,
        active: item.isActive,
        completed: !item.isActive
      }
    })
    this.setState({
      todos: newArr
    })
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

  createTodoItem(_id, name) {
    return {
      name,
      id: _id,
      active: true,
      completed: false
    }
  }

  addTodoItem = async (e) => {
    const { todoInput }  = this.state
    e.preventDefault()
    if(todoInput.trim()){
      const addDB = await this.todoService.createTodo(todoInput)
      if(addDB._id){
        console.log(addDB._id)
      }
      const newItem = this.createTodoItem(addDB._id, todoInput)
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

  deleteTodoItem = async (id) => {
    const deleteDB = await this.todoService.deleteOne(id)
    if(deleteDB){
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
  }

  onInputChange = (e) => {
    this.setState({
      todoInput: e.target.value
    })
  }

  onStatusChange = (id) => {
    this.setState( ({ todos }) => {
      const idx = todos.findIndex( (el) => el.id === id)
      console.log('index', idx)
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
    this.setState( ({todos, currentCheck}) => {
      const newArr = todos.map( (item) => {
        return {
          ...item,
          active: !currentCheck,
          completed: currentCheck
        }
      })
      return {
        todos: newArr,
        currentCheck: !currentCheck
      }
    })
  }

  onClearCompleted = async () => {
    const newArr = [...this.state.todos]
    const activeItems = newArr.filter( (el) => el.active)
    const completedItems = newArr.filter( (el) => el.completed).map( (el) => el.id)
    const deleteFew = await this.todoService.deleteFew(completedItems)
    if(deleteFew.result.deletedCount > 0){
      this.setState( ({todos}) => {
        return {
          todos: activeItems
        }
      })
    }
  }

  render(){
    const {todos, currentFilter} = this.state
    const todosLeft = todos.length - todos.filter((el)=> el.completed).length

    const visibleItems = this.filter(todos, currentFilter)

    return (
      <BrowserRouter>
      <div className="wrapper">
        <AppHeader/>
        <div>
          <div className="main">
            <UserPanel/>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <TodoList
              onInputChange={this.onInputChange}
              todos={visibleItems}
              onStatusChange={this.onStatusChange}
              addTodoItem={this.addTodoItem}
              deleteTodoItem={this.deleteTodoItem}
              selectAll={this.selectAll}
              inputValue={this.state.todoInput}
            />
            <TodoFooter
              todosCount={todos.length}
              todosLeft={todosLeft}
              currentFilter={this.state.currentFilter}
              filterClick={this.onFilterChange}
              clearCompleted={this.onClearCompleted}
            />
          </div>
        { todos.length ? <div><div className="second"/><div className="third"/></div> : null }
        </div>
      </div>
      </BrowserRouter>
      )
  }
}

export default App
