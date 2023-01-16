const koneksi = require('./database/koneksi')

module.exports = {
    
    home:(req, res) => {
        let sess;
        sess = req.session;
        if (sess.name) {
            let user = {
                name: req.session.name
            }
            res.render('home', {user});
        }
        else {
            console.log('blum login');
            res.redirect('/login');
        }
        
    }
}