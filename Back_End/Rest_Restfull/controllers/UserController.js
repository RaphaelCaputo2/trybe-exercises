const { Router } = require('express');
const UserService = require('../service/UserService');

const router = new Router();



router.get('/', async (req, res) => {
  const users = await UserService.getAll();
  res.status(200).json(users);
});

module.exports = router;
