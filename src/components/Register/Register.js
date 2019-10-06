import React from 'react'
import s from './Register.module.css'
import UserPanel from '../UserPanel'

const Register = () => {
  return (
    <div className={s.registerContainer}>
      <UserPanel/>
      <form>
        Register
      </form>
    </div>
  )
}

export default Register