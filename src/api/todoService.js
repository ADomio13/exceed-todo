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
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name}),
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
    })
    if(!res.ok){
      throw new Error(`Error, ${res.status}`)
    }
    return await res.json()
  }

  async deleteFew(ids) {
    const url = `${this._apiUrl}delete/few/${ids}`
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ids
    })
    if(!res.ok){
      throw new Error(`Error: ${res.status}`)
    }
    return await res.json()
  }
}

export default todoService