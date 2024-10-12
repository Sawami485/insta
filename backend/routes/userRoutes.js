// routes/userRoutes.js
const express = require('express');
const { saveUser } = require('../controllers/userController');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

// POST route to save user data
router.post('/login', saveUser);
// Route to get all users (without passwords)
router.get('/users', getUsers);
module.exports = router;
// routes/userRoutes.js



