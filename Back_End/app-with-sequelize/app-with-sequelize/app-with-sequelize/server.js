const usercontroller = require('./controllers/users_controller')


const express = require('express');
const app = express();
app.use(express.json());


app.use(usercontroller)




app.listen(3000, () => {
  console.log('Rodando')
})