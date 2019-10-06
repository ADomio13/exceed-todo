import React from 'react'
import s from './Login.module.css'
import UserPanel from '../UserPanel'

const Login = (props) => {
  return (
    <div className={s.loginContainer}>
      <UserPanel/>
      Login
    </div>
  )
}

export default Login