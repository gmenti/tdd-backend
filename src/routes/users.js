const { Router } = require('express');
const container = require('../container');
const UserController = require('../controllers/UserController');

const userController = new UserController(container);
const router = new Router({ mergeParams: true });

router.get('/', (req, res) => userController.index(req, res));

module.exports = router;
