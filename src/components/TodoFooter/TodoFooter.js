import React from 'react'
import './TodoFooter.css'

const TodoFooter = (props) => {
  return (
    <div className="todo-footer">
      <div className="stats">
        <span>4 items left</span>
      </div>
      <div className="filters">
        <span className="current">All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
      <div className="clear">
        <span>Clear completed</span>
      </div>
    </div>
  )
}

export default TodoFooter