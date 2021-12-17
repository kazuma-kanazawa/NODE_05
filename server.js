const express = require('express')
const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

const doteanv = require('dotenv')
const { Socket } = require('socket.io')
doteanv.config()
const host = process.env.HOST
const post = process.env.POST

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log(data)
        io.emit('message', data)
    })
})

http.listen(post, host, () => {
    console.log('http://' + host + ':' + post)
})