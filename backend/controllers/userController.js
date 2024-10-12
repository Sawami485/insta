const User = require('../models/User');

// Function to save a user
exports.saveUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Create and save new user
        const newUser = new User({ username, password });
        await newUser.save();

        // Return success response
        return res.status(200).json({ message: 'User saved successfully', user: newUser });
    } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ message: 'Failed to save user' });
    }
};

// Function to fetch all users (including passwords)
exports.getUsers = async (req, res) => {
    try {
        // Find users and include passwords
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
};
