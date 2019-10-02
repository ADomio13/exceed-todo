import React from 'react'
import './TodoFooter.css'

//let filterClasses = []

const TodoFooter = ({ todosCount, todosLeft, currentFilter, filterClick, clearCompleted }) => {
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
        onClick={filterClick}
        className={isActive ? 'current' : null}
      >{name}
    </span>
    )
  })

  return (
    <div>
    <div className="todo-footer">
      <div className="stats">
        <span>{todosLeft} items left</span>
      </div>
      <div className="filters">
        { buttons }
      </div>
      <div className="clear">
        { todosCount - todosLeft ? <span onClick={clearCompleted}>Clear completed</span> : null }
      </div>
    </div>
    </div>
  )
}

export default TodoFooter