const koneksi = require('./database/koneksi');

module.exports = {
    register:(req, res) => {
        res.render('register');
    },
    actionregister:(req, res) => {
        let user = {
            name: req.body.username,
            password: req.body.password
        };
        koneksi.query("INSERT INTO users (username, password) VALUES ('" + user.name + "', '" + user.password + "')", (err) => {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                res.redirect('/login')
            }
        });
    }
}