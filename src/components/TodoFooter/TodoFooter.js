import React from 'react'
import s from './TodoFooter.module.css'

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
        className={isActive ? s.current : null}
      >{name}
    </span>
    )
  })

  if(todosCount) {
    return (
      <div>
        <div className={s.todoFooter}>
          <div className={s.stats}>
            <span>{todosLeft} items left</span>
          </div>
          <div className={s.filters}>
            { buttons }
          </div>
          <div className={s.clear}>
            { todosCount - todosLeft ? <span onClick={clearCompleted}>Clear completed</span> : null }
          </div>
        </div>
      </div>
    )
  } else{
    return null
  }
}

export default TodoFooter