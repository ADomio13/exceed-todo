import React from 'react'
import './TodoItem.css'

const TodoItem = ({id, name, completed, onStatusChange, onDelete}) => {
  let classNames = 'todo-item'
  if(completed){
    classNames += ' completed'
  }
  return (
    <li className={classNames}>
      <input
        type="checkbox"
        defaultChecked={completed}
        id={id}
        onChange={()=> onStatusChange(id)}
      />
      <label htmlFor={id}>{name}</label>
      <span
        className="todo-delete"
        onClick={() => onDelete(id)}
      >&#10005;</span>
    </li>
  )
}

export default TodoItem