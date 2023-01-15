const mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expressjs'
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