// index.js
const express = require('express');
const { Address, Employee } = require('./models');

const app = express();
app.use(express.json());
app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'enderecos' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
  
    const employee = await Employee.findOne({ where: { id } });


    if (req.query.includeAddresses) {
      const adresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, adresses });
    }

    if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
