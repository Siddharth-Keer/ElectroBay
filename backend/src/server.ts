import http from 'http'
import app from './app'

const server = http.createServer(app)
const port:string | undefined = process.env.PORT

server.listen(port,()=>{
    console.log(`Running on Port: ${port}`)
})