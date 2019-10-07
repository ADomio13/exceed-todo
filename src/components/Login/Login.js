import React, { Component } from 'react'
import s from './Login.module.css'
import UserPanel from '../UserPanel'

export default class Login extends Component {

  loginUser = async (e) => {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return (
      <div className={s.loginContainer}>
        <UserPanel/>
        <p className={s.title}>Sign In</p>
        <div className={s.loginForm}>
          <form onSubmit={this.loginUser}>
            <div className={s.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" placeholder="E-mail" required/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" required/>
            </div>
            <div className={s.submitBlock}>
              <input className={s.submitButton} type="submit" value="Sign In"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}