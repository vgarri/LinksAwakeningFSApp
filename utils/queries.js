const queries = {
    // ---------------------------------------Users
    getUsersByEmail: `
    SELECT username,email,password,img,role
    FROM users
    WHERE email=$1;`,
    getUsersByUsername:`   
    SELECT username,email,password,img
    FROM users
    WHERE username=$1;`,
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
    login: `SELECT *
    FROM users
    WHERE username= $1 AND password= $2
    `,
    // ---------------------------------------Markers    


    
    
    getMarkersByType: `
    SELECT marker_id,marker_title,type,address,lat,long,url
    FROM markers
    WHERE type LIKE $1;`,
    getMarkerByTitle: `
    SELECT marker_id,marker_title,type,url,address,lat,long
    FROM markers
    WHERE marker_title=$1;`,
    getAllMarkers: `SELECT m.marker_id,m.marker_title,m.type,m.url,m.address,m.lat,m.long
    FROM markers AS m
    ORDER BY m.marker_id;`,
    createMarker: `INSERT INTO markers(marker_title,type,url,address,lat,long) 
    VALUES ($1,$2,$3,$4,$5,$6)
    `,
    updateMarkerByTitle: `UPDATE markers
    SET marker_title = $1, type = $2, url=$3 ,address = $4, lat = $5, long = $6
    WHERE marker_title = $7
    `,
    deleteMarkerByTitle: `DELETE FROM markers
    WHERE marker_title = $1;
    `, // ---------------------------------------Favorites
    getAllFavoriteMarkers: `SELECT f.favorite_id, f.username, f.marker_title
    FROM favoriteMarkers AS f
    ORDER BY f.favorite_id
    `,
    getFavoriteMarkersByUsername:`SELECT f.favorite_id, f.username, f.marker_title
    FROM favoriteMarkers AS f
    INNER JOIN users AS u
    ON f.username = u.username
    WHERE u.username = $1`,
    createFavoriteMarker: `INSERT INTO favoriteMarkers(username,marker_title) 
    VALUES ($1,$2)
    `,
    deleteFavoriteMarkerByUsernameAndTitle: `DELETE FROM favoriteMarkers
    WHERE username = $1 AND marker_title = $2`

}
module.exports = queries;