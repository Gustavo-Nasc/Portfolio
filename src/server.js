const express = require('express')
const route = require('./route')
const path = require('path')
const http = require('http')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('assets'))

app.use(route)

app.set('port', process.env.PORT || 3000)

http.createServer(app).listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
})