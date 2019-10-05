import React from 'react'
import s from './TodoItem.module.css'

const TodoItem = ({id, name, completed, onStatusChange, onDelete}) => {
  let classNames = s.todoItem
  if(completed){
    classNames += ` ${s.completed}`
  }
  return (
    <li className={classNames}>
      <input
        type="checkbox"
        checked={completed}
        id={id}
        onChange={()=> onStatusChange(id)}
      />
      <label htmlFor={id}>{name}</label>
      <span
        className={s.todoDelete}
        onClick={() => onDelete(id)}
      >&#10005;</span>
    </li>
  )
}

export default TodoItem