const express = require('express');
const app = express();
const rescue = require('express-rescue');
const simpson = require('../data/simpsons.json');
const fs = require('fs').promises;

app.get('/simpsons', (req, res) => {
  res.status(200).send({
    simpson,
  });
});

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const size = simpson.length;
    simpson[size] = {
      id: `${size + 1}`,
      name: req.body.name,
    };
    try {
      await fs.writeFile(`${__dirname}/../data/simpsons.json`, JSON.stringify(simpson));
      res.status(200).send({
        message: 'Salvado irmão!',
      });
    } catch (err) {
      throw new Error(err);
    }
  }),
);

app.put(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    simpson[id - 1].name = name;
    const size = simpson.length;
    simpson[size] = {
      id: `${size + 1}`,
      name: req.body.name,
    };
    try {
      await fs.writeFile(`${__dirname}/../data/simpsons.json`, JSON.stringify(simpson));
      res.status(201).send({
        message: 'Alterado com sucesso irmão!',
      });
    } catch (err) {
      throw new Error(err);
    }
  }),
);

app.delete(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const index = id - 1;
    simpson.splice(index, 1);
    try {
      await fs.writeFile(`${__dirname}/../data/simpsons.json`, JSON.stringify(simpson));
      res.status(204).send({
        message: 'Deletado com sucesso irmão!',
      });
    } catch (err) {
      throw new Error(err);
    }
  }),
);
module.exports = app;
