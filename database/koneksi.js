const mysql = require('mysql');
const dotenv = require('dotenv')
dotenv.config();
const env = process.env;

let conn = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
});
conn.connect((err) => {
    if (err) {
        console.log(`koneksi error : ${err}`);
    }
})

// conn.query("SELECT * FROM users", (err, result) => {
//     console.log(result);
// })
module.exports = conn;