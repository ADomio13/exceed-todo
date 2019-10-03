class todoService {
  _apiUrl = 'http://localhost:3001/todos/'

  async getAllTodos() {
    const res = await fetch(this._apiUrl)
    if(!res.ok){
      throw new Error(`Error, ${res.status}`)
    }
    return await res.json()
  }

  async createTodo(name) {
    const url = `${this._apiUrl}add/`
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name: name}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    if(!res.ok){
      throw new Error(`Error, ${res.status}`)
    }
    return await res.json()
  }

  async deleteOne(id) {
    const url = `${this._apiUrl}delete/${id}`
    const res = await fetch(url, {
      method: 'DELETE',
      body: id,
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    if(!res.ok){
      throw new Error(`Error, ${res.status}`)
    }
    return await res.json()
  }

}

export default todoService