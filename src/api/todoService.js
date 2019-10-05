class todoService {

  async getAllTodos() {
    const res = await fetch('/todos')
    if(!res.ok){
      throw new Error(`Error, ${res.status}`)
    }
    return await res.json()
  }

  async createTodo(name) {
    const url = '/todos/add/'
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

  async edit(id, completed) {
    const url = `/todos/edit/${id}`
    const res = await fetch(url, {
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({isActive: !completed})
    })
    if(!res.ok){
      throw new Error(`Error, ${res.status}`)
    }
    return await res.json()
  }

  static async deleteOne(id) {
    const url = `/todos/delete/${id}`
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
    const url = `/todos/delete/few/${ids}`
    const res = await fetch(url, {
      method: 'DELETE',
      body: ids
    })
    if(!res.ok){
      throw new Error(`Error: ${res.status}`)
    }
    return await res.json()
  }
}

export default todoService