const openDB = require('./config')

const initDB = {
    async init() {
        const db = await openDB()

        await db.exec(`
            CREATE TABLE projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT,
                description TEXT,
                image TEXT,
                repository TEXT,
                page TEXT
            )`
        )

        await db.exec(`
            CREATE TABLE projectInMind (
                title TEXT,
                description TEXT,
                details TEXT,
                image TEXT
            )
        `)

        await db.exec(`
            CREATE TABLE comments (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nameUser TEXT,
                comment TEXT,
                rating TEXT
            )`
        )


        await db.close()
    }
}

initDB.init();