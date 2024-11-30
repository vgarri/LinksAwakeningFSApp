const express = require('express');
// Rutas de usuario
const userController = require("../controllers/user.controller");
const router = express.Router();
// const {userDataValidateChainMethod} = require('../validation/user.validation');

router.get('/', userController.getAllUsers);
router.get('/email',userController.getUsersByEmail);
router.post('/', userController.createUser);
router.put('/email',userController.updateUserByEmail);
router.delete('/email', userController.deleteUserByEmail);
router.post('/login', userController.login);

module.exports = router;