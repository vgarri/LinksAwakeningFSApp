const queries = {
    // ---------------------------------------Users
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
    `, // ---------------------------------------Markers
    getMarkersByType: `
    SELECT marker_id,title,type,x,y,z
    FROM markers
    WHERE type=$1;`,
    getMarkerByTitle: `
    SELECT marker_id,title,type,x,y,z
    FROM markers
    WHERE title=$1;`,
    getAllMarkers: `SELECT m.marker_id,m.title,m.type,m.x,m.y,m.z
    FROM markers AS m
    ORDER BY m.marker_id;`,
    createMarker: `INSERT INTO markers(title,type,x,y,z) 
    VALUES ($1,$2,$3,$4,$5)
    `,
    updateMarkerByTitle: `UPDATE markers
    SET title = $1, type = $2, x = $3, y = $4, z =$5
    WHERE title = $6
    `,
    deleteMarkerByTitle: `DELETE FROM markers
    WHERE title = $1;`
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