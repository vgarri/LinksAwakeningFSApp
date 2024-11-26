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
    SELECT marker_id,marker_title,type,x,y,z
    FROM markers
    WHERE type=$1;`,
    getMarkerByTitle: `
    SELECT marker_id,marker_title,type,x,y,z
    FROM markers
    WHERE marker_title=$1;`,
    getAllMarkers: `SELECT m.marker_id,m.marker_title,m.type,m.x,m.y,m.z
    FROM markers AS m
    ORDER BY m.marker_id;`,
    createMarker: `INSERT INTO markers(marker_title,type,x,y,z) 
    VALUES ($1,$2,$3,$4,$5)
    `,
    updateMarkerByTitle: `UPDATE markers
    SET marker_title = $1, type = $2, x = $3, y = $4, z =$5
    WHERE marker_title = $6
    `,
    deleteMarkerByTitle: `DELETE FROM markers
    WHERE marker_title = $1;
    `, // ---------------------------------------Completed Markers
    getAllCompletedMarkers: `SELECT c.completed_id, c.username, c.marker_title
    FROM completedMarkers AS c
    ORDER BY c.completed_id
    `,
    getCompletedMarkersByUsername:`SELECT c.completed_id, c.username, c.marker_title
    FROM completedMarkers AS c
    INNER JOIN users AS u
    ON c.username = u.username
    WHERE u.username = $1`,
    createCompletedMarker: `INSERT INTO completedMarkers(username,marker_title) 
    VALUES ($1,$2)
    `,
    deleteCompletedMarkerByTitle: `DELETE FROM completedMarkers
    WHERE marker_title = $1;`

}
module.exports = queries;