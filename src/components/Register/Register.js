import React, { Component } from 'react'
import s from './Register.module.css'
import UserPanel from '../UserPanel'
import userService from '../../api/userService'

export default class Register extends Component {

  userService = new userService()

  registerUser = async (e) => {
    e.preventDefault()
    const { email, password, firstName, lastName } = e.target
    const user = {
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
    console.log(user)
    const registration = await this.userService.registration(user)
    console.log(registration)
  }

  render() {
    return (
      <div className={s.registerContainer}>
        <UserPanel/>
        <p className={s.title}>Sign Up</p>
        <div className={s.registerForm}>
          <form onSubmit={this.registerUser}>
            <div className={s.formGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" placeholder="E-mail" required/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" required/>
              <label htmlFor="firstName">First name</label>
              <input type="text" name="firstName" placeholder="First name"/>
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" placeholder="Last name"/>
            </div>
            <div className={s.submitBlock}>
              <input className={s.submitButton} type="submit"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}