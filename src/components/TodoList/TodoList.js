import React, {Fragment} from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onStatusChange }) => {

  const elements = todos.map( (element) => {
    return (
      <TodoItem
        key={element.id}
        id={element.id}
        name={element.name}
        completed={element.completed}
        onChange={onStatusChange}
      />
    )
  })

  return (
    <Fragment>
      <input className="todo-input" id="todo-input" type="text" placeholder="What needs to be done?"/>
      {elements}
    </Fragment>

  )
}

export default TodoList