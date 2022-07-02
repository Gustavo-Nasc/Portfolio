const Database = require('../database/config')

module.exports = {
    async create(req, res) {
        const db = await Database()

        const title = req.body.title
        const description = req.body.description
        const image = req.body.image
        const repository = req.body.repository
        const page = req.body.page

        const password = req.body.password
        const passwordADM = await db.get(`
            SELECT * FROM adm
        `)

        if (password == passwordADM.password) {
            await db.run(`
                INSERT INTO projects (title, description, image, repository, page) VALUES (
                    "${title}", "${description}", "${image}", "${repository}", "${page}"
                )
            `)

            await db.close()

            res.render('parts/confirm-project')
        } else {
            res.render('parts/incorrect-password')
        }
    },

    open(req, res) {
        res.render('parts/confirm-project')
    }
}