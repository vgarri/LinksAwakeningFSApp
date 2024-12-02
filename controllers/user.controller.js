const User = require('../models/user.model'); // Importar el modelo de la BBDD
// const { validationResult } = require("express-validator");
const { createToken } = require('../config/jsonWebToken');

const getAllUsers = async (req, res) => {
    let users;
    users = await User.getAllUsers();

    res.status(200).json(users); // 
}
const getUsersByEmail = async (req, res) => {
    const { email } = req.query;
    try {
        const userData = await User.getUsersByEmail(email);
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error obtaining user by email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const getUsersByUsername = async (req, res) => {
    const { username } = req.query;
    try {
        const userData = await User.getUsersByUsername(username);
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error obtaining user by username:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Crear usuario //Post

const createUser = async (req, res, next) => {
    try {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({
        //         success: false,
        //         errors: errors.array(),
        //     });
        // }
        const newUser = req.body; // {username,email,password, img}
        const response = await User.createUser(newUser);
        res.status(201).json({
            "items_created": response,
            message: `User created: ${req.body.email}`,
            username: newUser.username,
            email: newUser.email,
            password: "*************",
            img: newUser.img
        })
        //res.redirect al pug que toca. Da conflicto con los dos res
    } catch (error) {
        console.error('Error creating User:', error)
        // res.status(500).json({ error: 'Internal server error' })
        // next(error)

    }
}

const updateUserByEmail = async (req, res) => {
    const { email } = req.query;
    const updatedUserData = req.body;
    try {
        const response = await User.updateUserByEmail(email);
        if (response) {
            res.status(200).json({
                message: `User updated: ${email}`,
                data: updatedUserData
            });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating User:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteUserByEmail = async (req, res) => {
    const { email } = req.query; // {email} le pasaremos el email por el body
    try {
        const response = await User.deleteUserByEmail(email);
        if (response) {
            res.status(200).json({
                message: `User: ${email} was deleted successfully`,
                data: response
            });
        } else {
            res.status(404).json({ error: 'User with that email was not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.login(username, password);
        if (user) {
            const token = createToken({ username: user.username });
            res.status(200)
                .set('Authorization', `Bearer ${token}`)
                .cookie('access_token', token)
                // .json({ role: user[0].role })
                .send()
        } else {
            res.status(400).json({ msg: "wrong credentials" });
        }

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
const logout = async (req, res) => {
    try {
        res.status(200)
            .set('Authorization', "")
            .cookie('access_token', "")
            .send();
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
};

module.exports = {
    getAllUsers,
    getUsersByEmail,
    getUsersByUsername,
    createUser,
    updateUserByEmail,
    deleteUserByEmail,
    login,
    logout
    // getAllFavoritesFromUser,
    // markAsFavorite,
    // unmarkAsFavorite

}