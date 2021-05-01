const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
  res.send({
    nome: "Raphael"
  })
})

app.listen(port, () => {
  console.log('Servidor rodando na porta 3000')
})