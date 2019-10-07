import React from 'react'
import s from './UserPanel.module.css'
import { NavLink } from 'react-router-dom'

const UserPanel = () => {
  return (
    <div className={s.userPanel}>
      <span><NavLink to="/register" activeClassName={s.activeLink}>Sign Up</NavLink></span>
      <span><NavLink to="/login" activeClassName={s.activeLink}>Sign In</NavLink></span>
    </div>
  )
}

export default UserPanel