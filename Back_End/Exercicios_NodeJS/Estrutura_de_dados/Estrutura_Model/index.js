const { json } = require('body-parser');
const express = require('express');
const app = express();


const PORT = 3000;
const Author = require('./models/Author');
app.use(json());
app.get('/authors', async (req, res) => {
  const author = await Author.getAll();
  try{
    res.status(200).json(author);

  }catch(err){
    res.status(400).send(err.message)
  }
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params
  const authors = await Author.findById(id);
  try{
    res.status(200).json(authors);
  }catch(err){
    res.status(400).send(err.message)
  }
})

app.listen(PORT, () => {
  console.log("Servidor rodando Caputo!")
})