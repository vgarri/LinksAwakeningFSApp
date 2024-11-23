const queries = {
    getUsersByEmail: `
    SELECT username,email,password,img,role
    FROM users
    WHERE email=$1;`,
    getAllUsers: `SELECT u.id,u.username,u.email,u.password,u.img,u.role
    FROM users AS u
    ORDER BY u.id;`,
    createUser: `INSERT INTO users(username,email,password,img) 
    VALUES ($1,$2,$3,$4)
    `,
    updateUserByEmail: `UPDATE users
    SET username = $1, email = $2, password = $3, img = $4
    WHERE email = $5
    `,
    deleteUserByEmail: `DELETE FROM users
    WHERE email = $1;
    `,
    // getAllFavoritesFromUser: `SELECT f.favorite_id, f.user_id, f.mongo_title, f.mongo_id
    // FROM favorites AS f
    // INNER JOIN users AS u
    // ON f.user_id = u.id
    // WHERE u.id = $1

    // `,
    // markAsFavorite: `INSERT INTO favorites(user_id,mongo_title,mongo_id) 
    // VALUES ($1,$2,$3)
    // `,
    // unmarkAsFavorite: `DELETE FROM favorites AS f
    // WHERE f.favorite_id = $1`
}
module.exports = queries;