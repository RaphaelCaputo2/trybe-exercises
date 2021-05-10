const express = require('express');
const get = require('../controller/nationalityController');
const router = express.Router();

router.get('/nationality', get.getAll);
// router.get('/nationality/:id', '');
// router.post('/nationality', '');
// router.put('/nationality/:id', '');
// router.delete('/nationality/:id', '');

module.exports = router;