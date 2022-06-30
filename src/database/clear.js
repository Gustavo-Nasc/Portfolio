const openDB = require('./config')

const clearDB = {
    async init() {
        const db = await openDB()

        await db.exec(`DELETE FROM projects`)

        await db.exec(`DELETE FROM comments`)

        await db.exec(`DELETE FROM projectInMind`)

        await db.close()
    }
}

clearDB.init();