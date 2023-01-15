const express = require('express');
const loginController = require('./login-controller')
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.get('/', loginController.welcome);
app.get('/login', loginController.login);
app.post('/login', loginController.actionLogin);

app.listen(PORT, console.log(`Berjalan di port : ${PORT}`));