const express = require('express');
const router = express.Router();

let users = []; // In-memory user storage for demonstration purposes

// Auto-generate appUserId
const generateUserId = () => 'user-' + Date.now();

// POST /signup endpoint
router.post('/signup', (req, res) => {
    const { fullName, email, phone, password, language } = req.body;
    const appUserId = generateUserId();
    const newUser = { appUserId, fullName, email, phone, password, language };
    users.push(newUser);
    res.status(201).json({ message: 'User created', appUserId });
});

// POST /login endpoint
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful', appUserId: user.appUserId });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// GET /profile/:userId endpoint
router.get('/profile/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users.find(u => u.appUserId === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

module.exports = router;