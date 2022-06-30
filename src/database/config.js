const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = async function openDB() {
    return open({
        filename: './src/database/portfolio.sqlite',
        driver: sqlite3.Database
    })
}