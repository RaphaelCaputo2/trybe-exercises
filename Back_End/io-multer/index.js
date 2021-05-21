const express = require('express')
const app = express();
const multer = require('multer');
const axios = require('axios');
app.use(express.json());
app.use(express.static(__dirname + '/uploads'));
const upload = multer({ dest: 'uploads' });

app.get('/', (req, res) => {
  res.status(200).json({message: "pong"})
})

axios
  .get('http://localhost:3000/files/upload/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  });
 
app.post('/files/upload', upload.single('file'), (req, res) => {
console.log(req.body, req.file)
  try{
    res.status(200).json({ body: req.body, file: req.file })
    
  }catch(err){
    res.status(400).send(err.message)
  }
}
);
app.listen(3001, () => {
  console.log('rodando ok')
})