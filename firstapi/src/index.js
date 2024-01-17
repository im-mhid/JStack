const http = require('http')
const url = require('url')
// const { URL } = require('url')

const routes = require('./routes')
const server = http.createServer((request, response) => {
  const parsedUrl = url.parse(request.url, true) //FUNÇÃO DEPRECIADA
  // const parsedUrl = new URL(`http://localhost:3000${request.url}`)
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  let { pathname } = parsedUrl
  let id = null
  const splitEndpoint = pathname.split('/').filter(Boolean)

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  const route = routes.find(
    routeObj =>
      routeObj.endpoint === pathname && routeObj.method === request.method
  )

  if (route) {
    request.query = parsedUrl.query
    request.params = { id }

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { 'Content-Type': 'text/html' })
      response.end(JSON.stringify(body))
    }
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${request.url}`)
  }

  // VERSÃO MAIS TRABALHOSA QUE NECESSITARIA SER REESCRITA PARA CADA ROTA
  // if (request.url === '/users' && request.method === 'GET') {
  //   UserController.listUsers(request, response)
  // } else {
  //   response.writeHead(404, { 'Content-Type': 'text/html' })
  //   response.end(`Cannot ${request.method} ${request.url}`)
  // }
})

server.listen(3000, () =>
  console.log('Server started at http://localhost:3000')
)
