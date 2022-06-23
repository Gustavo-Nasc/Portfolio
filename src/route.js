const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/add-project', (req, res) => res.render('add-project'))

module.exports = route