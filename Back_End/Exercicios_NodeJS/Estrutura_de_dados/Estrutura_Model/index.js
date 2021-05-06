const express = require('express');
const app = express();


const PORT = 3000;
const Author = require('./models/Author');
app.get('/authors', async (req, res) => {
  const author = await Author.getAll();
  try{
    res.status(200).json(author);

  }catch(err){
    res.status(400).send(err.message)
  }
})

app.listen(PORT, () => {
  console.log("Servidor rodando Caputo!")
})