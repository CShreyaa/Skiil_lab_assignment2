const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user operations
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
