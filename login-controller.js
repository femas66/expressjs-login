const koneksi = require('./database/koneksi')

module.exports = {
    welcome:(req, res) => {
        req.session.username = "femas";
        console.log(req.session.name);
        console.log(req.session.username);
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
                    console.log(result);
                    let sess = req.session;
                    sess.name = user.name;
                    console.log("Berhasil");
                    res.redirect('/home');
                }
                else {
                    res.render('login', {msg: "Username/password salah"})
                }
            }
            
        })
    },
    logout:(req, res) => {
        req.session.destroy();
        return res.redirect('/login');
    }
}