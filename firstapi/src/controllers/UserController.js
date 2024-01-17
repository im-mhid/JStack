const users = require('../mocks/users')

module.exports = {
  listUsers(request, response) {
    const { order } = request.query

    const sortedUsers = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1
      }

      return a.id > b.id ? 1 : -1
    })
    response.send(200, sortedUsers)
    //REFATORADO PARA EVITAR DIGITAR TD VEZ Q FOR ENVIAR REQUISIÇÃO
    // response.writeHead(200, { 'Content-Type': 'application/json' })
    // response.end(JSON.stringify(sortedUsers))
  },
  getUserById(request, response) {
    const { id } = request.params

    const selectedUser = users.find(user => user.id === Number(id))

    if (!selectedUser) {
      return response.send(400, { error: 'User not found' })
    }

    response.send(200, selectedUser)
  }
}
