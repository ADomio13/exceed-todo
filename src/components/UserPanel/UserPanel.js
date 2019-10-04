import React from 'react'
import './UserPanel.css'
import { NavLink } from 'react-router-dom'

const UserPanel = () => {
  return (
    <div className="user-panel">
      <span><NavLink to="/register">Sign Up</NavLink></span>
      <span><NavLink to="/login">Sign In</NavLink></span>
    </div>
  )
}

export default UserPanel