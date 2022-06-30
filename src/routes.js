const express = require('express')
const ProjectController = require('./controllers/ProjectController')
const ProjectMindController = require('./controllers/ProjectMindController')
const CommentsController = require('./controllers/CommentsController')
const PortfolioController = require('./controllers/PortfolioController')

const routes = express.Router()

routes.get('/', PortfolioController.enter)

routes.get('/add-project', (req, res) => res.render('add-project'))
routes.post('/add-project', ProjectController.create)
routes.get('/project', ProjectController.open)

routes.post('/add-comment', CommentsController.create)

routes.get('/project-mind', (req, res) => res.render('project-mind'))
routes.post('/add-project-mind', ProjectMindController.create)
routes.post('/remove-project-mind', ProjectMindController.delete)

module.exports = routes