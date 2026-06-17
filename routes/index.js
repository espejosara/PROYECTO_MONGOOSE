const express = require('express');
const router = express.Router();
const usersRoutes = require('./users');

// Le decimos que use las rutas de usuarios
router.use('/', usersRoutes);

module.exports = router;