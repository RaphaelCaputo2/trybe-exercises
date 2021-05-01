const express = require('express');
const app = express();
const port = 3000
const simpsons = require('./routes/simpsons');
const {errorMiddleware, logMiddleware} = require('./mmiddlewares/index');


app.get('/', (req, res) => {
  res.send({
    nome: "Raphael"
  })
});

app.use(express.json());
app.use(logMiddleware)
app.use(simpsons);

app.use(errorMiddleware)
app.listen(port, () => {
  console.log('Servidor rodando na porta 3000')
})