import React from 'react'
import s from './UserPanel.module.css'
import { NavLink } from 'react-router-dom'

const UserPanel = () => {
  return (
    <div className={s.userPanel}>
      <span><NavLink to="/register">Sign Up</NavLink></span>
      <span><NavLink to="/login">Sign In</NavLink></span>
    </div>
  )
}

export default UserPanel