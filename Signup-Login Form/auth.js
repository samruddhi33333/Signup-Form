const express = require('express');
const User = require('User.js/models/User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        // Check if confirmPassword matches password
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
