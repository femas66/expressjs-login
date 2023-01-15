const koneksi = require('./database/koneksi')

module.exports = {
    welcome:(req, res) => {
        res.render('welcome');
    },
    login:(req, res) => {
        res.render('login');
    },
    actionLogin:(req,res) => {
        let user = {
            name: req.body.username,
            password:req.body.password
        }
        console.log(user);
        koneksi.query("SELECT * FROM users WHERE username = '" + user.name + "' AND password = '" + user.password + "'", (err, result) => {
            if (err) {
                console.log(`error: ${err}`);
            }
            else {
                // console.log(result);
                // console.log(result.length)
                if (result.length > 0) {
                    console.log("Berhasil");
                    res.render('home', {user});
                }
                else {
                    res.send("Username/password salah")
                }
            }
            
        })
    }
}