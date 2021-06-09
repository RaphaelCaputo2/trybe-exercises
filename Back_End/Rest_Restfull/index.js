const express = require('express');
const app = express();
const userController = require('./controllers/UserController');
app.use(express.json())

app.use('/users', userController)
app.listen(3000, () => console.log('servidor on'))
