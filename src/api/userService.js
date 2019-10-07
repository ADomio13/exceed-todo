export default class userService {

  async registration(user) {
    const url = `/users/register`
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    if(!res.ok) {
      throw new Error(`Error, ${res.status}`)
    }
    return res.json()
  }

  async login(email, password) {
    const url = `/users/login`
    const res = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    if(!res.ok) {
      throw new Error(`Error, ${res.status}`)
    }
    return res.json()
  }
}