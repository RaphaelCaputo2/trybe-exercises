const express = require('express');
const app = express();
const PORT = 3000;
const nationalityRoutes = require('./src/routes/nationalityRoutes');
app.use(express.json());
app.use(nationalityRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
