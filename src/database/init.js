const openDB = require('./config')

const initDB = {
    async init() {
        const db = await openDB()

        await db.exec(`
            CREATE TABLE projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT,
                image TEXT,
            )
        `)

        await db.exec(`
            CREATE TABLE comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                description TEXT,
                rating TEXT,
                image TEXT
            )
        `)

        await db.close()
    }
}

initDB.init()