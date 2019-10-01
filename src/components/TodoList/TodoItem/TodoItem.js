import React from 'react'
import './TodoItem.css'

const TodoItem = ({id, name, completed, onChange}) => {
  let classNames = 'todo-item'
  if(completed){
    classNames += ' completed'
  }
  return (
    <li className={classNames}>
      <input
        type="checkbox"
        id={id}
        onChange={()=> onChange(id)}
      />
      <label htmlFor={id}>{name}</label>

    </li>
  )
}

export default TodoItem