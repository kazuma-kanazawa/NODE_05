const express = require('express')
const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))

const doteanv = require('dotenv')
doteanv.config()
const host = process.env.HOST
const post = process.env.POST

http.listen(post, host, () => {
    console.log('http://' + host + ':' + post)
})