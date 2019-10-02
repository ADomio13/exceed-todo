import React, {Fragment} from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onStatusChange, addTodoItem, deleteTodoItem, onInputChange, inputValue }) => {

  const elements = todos.map( (element) => {
    return (
      <TodoItem
        key={element.id} id={element.id} name={element.name} completed={element.completed}
        onStatusChange={onStatusChange} onDelete={deleteTodoItem}
      />
    )
  })

  return (
    <Fragment>
      <div className="todo-input">
        <img className="input-selectall" src="https://img.icons8.com/ios-filled/50/000000/expand-arrow.png" alt="Mark all as completed" />
        <form onSubmit={addTodoItem}>
          <input
            type="text" placeholder="What needs to be done?"
            onChange={onInputChange}
            value={inputValue}
          />
        </form>
      </div>
      {elements}
    </Fragment>
  )
}

export default TodoList