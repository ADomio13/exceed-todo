import React from 'react'
import './TodoFooter.css'

//let filterClasses = []

const TodoFooter = ({currentFilter, onFilterClick, todosLeft}) => {
  const filters = [
    {id: 'all', name: 'All'},
    {id: 'active', name: 'Active'},
    {id: 'completed', name: 'Completed'}
  ]

  const buttons = filters.map(( { id, name }) => {
    const isActive = currentFilter === id
    return (
      <span
        key={id}
        id={id}
        onClick={onFilterClick}
        className={isActive ? 'current' : null}
      >{name}
    </span>
    )
  })

  return (
    <div className="todo-footer">
      <div className="stats">
        <span>{todosLeft} items left</span>
      </div>
      <div className="filters">
        { buttons }
      </div>
      <div className="clear">
        <span>Clear completed</span>
      </div>
    </div>
  )
}

export default TodoFooter