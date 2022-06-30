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
    },

    get(req, res) {
        const commentId = req.params.id

        res.render('remove-comment', { commentId: commentId })
    },

    async delete(req, res) {
        const db = await Database()

        const password = req.body.password
        const passwordADM = await db.get(`
            SELECT * FROM adm
        `)

        if (password == passwordADM.password) {
            const idFORM = req.params.id

            await db.get(`
                DELETE FROM comments WHERE id = ${idFORM}
            `)

            res.redirect('/')
        } else {
            res.render('parts/incorrect-password')
        }
    }
}