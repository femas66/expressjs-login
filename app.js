const express = require('express');
const loginController = require('./login-controller')
const registerController = require('./register-controller');
const homeController = require('./home-controller');
const dotenv = require('dotenv');
const session = require('express-session')
const bodyParser = require('body-parser');

dotenv.config();
const env = process.env;

const app = express();
const PORT = env.PORT;
app.set('view engine', 'ejs');
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', loginController.welcome);
app.get('/login', loginController.login);
app.post('/login', loginController.actionLogin);
app.get('/logout', loginController.logout);

app.get('/register', registerController.register);
app.post('/register', registerController.actionregister);

app.get('/home', homeController.home)

app.listen(PORT, console.log(`Berjalan di port : ${PORT}`));