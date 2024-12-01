const pool = require('../config/db_pgSQL')
const queries = require('../utils/queries.js') // Queries SQL
const bcrypt = require('bcryptjs');
//falta favoritos


// GET

const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllUsers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// GET BY EMAIL CONTROLLER PARAMS
const getUsersByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUsersByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const getUsersByUsername = async (username) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUsersByUsername, [username])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// POST (CREATE)
const createUser = async (user) => {
    const { username, email, password, img } = user;
    let client, result;

    // Si el username es null o undefined, asigna uno por defecto
    const finalUsername = username ? username : email.split('@')[0]; 
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const hashedPassword = password ? await bcrypt.hash(password, 10) : null; // Si hay contraseña, la hasheamos
        const data = await client.query(queries.createUser,[finalUsername, email, hashedPassword, img])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//UPDATE
const updateUserByEmail = async (updatedUser, currentEmail) => {
    const { name, email, password, img } = updatedUser;
    let client, result;
    try {
        client = await pool.connect();
        const hashedPassword = password ? await bcrypt.hash(password, 10) : null; // Si hay contraseña, la hasheamos
        const data = await client.query(queries.updateUserByEmail, [name, email, hashedPassword, img, currentEmail]);
        result = data.rows; // Devuelve la fila actualizada
    } catch (err) {
        console.log('Error updating user:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};
// DELETE
const deleteUserByEmail = async (userToDelete) => {
    const email = userToDelete;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteUserByEmail, [email]);
        result = data.rowCount
        
    } catch (err) {
        console.log('Error deleting user:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};
const login = async (username, password) => {
    let client, result;
    try {
        client = await pool.connect();
        const storedUser = await client.query(queries.getUsersByUsername, [username]);
        //console.log(storedUser)
        const comparePW = await bcrypt.compare(password, storedUser.rows[0].password); // un-hasheamos contraseña
        if (!comparePW) {
            throw new Error('Incorrect Password');
        }
        else {
        const userExists = await client.query(queries.login, [username, storedUser.rows[0].password]);
        return userExists;
        }

    } catch (error) {
        console.log(error.message);
        throw error
    };
};

// GET BY EMAIL CONTROLLER PARAMS
// const getAllFavoritesFromUser = async (id) => {
//     let client, result;
//     try {
//         client = await pool.connect(); // Espera a abrir conexion
//         const data = await client.query(queries.getAllFavoritesFromUser, [id])
//         result = data.rows
        
//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result
// }
// const markAsFavorite = async (favorite) => {
//     const { user_id, mongo_title, mongo_id } = favorite;
//     let client, result;
//     try {
//         client = await pool.connect(); // Espera a abrir conexion
//         const data = await client.query(queries.markAsFavorite,[user_id, mongo_title, mongo_id])
//         result = data.rowCount
//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result
// }
// const unmarkAsFavorite = async (favoriteid) => {
//     let client, result;
//     try {
//         client = await pool.connect();
//         const data = await client.query(queries.unmarkAsFavorite, [favoriteid]);
//         result = data.rowCount
        
//     } catch (err) {
//         console.log('Error unmarking favorite:', err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result;
// };



const Users = {
    getAllUsers,
    getUsersByEmail,
    getUsersByUsername,
    createUser,
    updateUserByEmail,
    deleteUserByEmail,
    login
}

module.exports = Users;