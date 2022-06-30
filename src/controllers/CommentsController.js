const Database = require('../database/config')

module.exports = {
    async create(req, res) {
        const db = await Database()

        const name = req.body.name
        const comment = req.body.comment
        const rating = req.body.rating

        await db.run(`
            INSERT INTO comments (nameUser, comment, rating) VALUES (
                "${name}", "${comment}", "${rating}"
            )
        `)

        res.redirect('/')
    },

    open(req, res) {
        res.render('parts/confirm-comment')
    }
}