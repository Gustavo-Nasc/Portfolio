const Database = require('../database/config')

module.exports = {
    async enter(req, res) {
        const db = await Database()

        const projects = await db.all(`
            SELECT * FROM projects
        `)

        const comments = await db.all(`
            SELECT * FROM comments
        `)

        const projectInMind = await db.get(`
            SELECT * FROM projectInMind
        `)

        await db.close()

        res.render('index', { projects: projects, comments: comments, projectInMind: projectInMind })
    }
}