const Database = require('../database/config')

module.exports = {
    async create(req, res) {
        const db = await Database()

        const title = req.body.title
        const description = req.body.description
        const details = req.body.details
        const image = req.body.image

        const password = req.body.password
        const passwordADM = await db.get(`
            SELECT * FROM adm
        `)

        if (password == passwordADM.password) {
            await db.run(`
                DELETE FROM projectInMind
            `)

            await db.run(`
                INSERT INTO projectInMind (title, description, details, image) VALUES (
                    "${title}", "${description}", "${details}", "${image}"
                )
            `)

            await db.close()

            res.redirect('/project')
        } else {
            res.render('parts/incorrect-password')
        }
    },

    async delete(req, res) {
        const db = await Database()

        const password = req.body.password
        const passwordADM = await db.get(`
            SELECT * FROM adm
        `)

        if (password == passwordADM.password) {
            await db.run(`
                DELETE FROM projectInMind
            `)

            await db.run(`
                DELETE FROM projectInMind
            `)

            await db.close()

            res.redirect('/')
        } else {
            res.render('parts/incorrect-password')
        }
    }
}