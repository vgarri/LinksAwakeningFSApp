const pool = require('../config/db_pgSQL.js')
const queries = require('../utils/queries.js') // Queries SQL



// GET

const getAllFavoriteMarkers = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllFavoriteMarkers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// GET BY username CONTROLLER PARAMS
const getFavoriteMarkersByUsername = async (username) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getFavoriteMarkersByUsername, [username])
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
//Mark as completed
const createFavoriteMarker = async (completed) => {
    const { username, marker_title } = completed;
    let client, result;

    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createFavoriteMarker,[username, marker_title])
        result = data.rowCount
    } catch (err) {
        console.log('error marking as fav:', err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


// DELETE
//unmark as fav
const deleteFavoriteMarkerByUsernameAndTitle = async (FavMarkerToDelete) => {
    const { username, marker_title } = FavMarkerToDelete;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteFavoriteMarkerByUsernameAndTitle, [username, marker_title]);
        result = data.rowCount
        
    } catch (err) {
        console.log('Error unmarking as fav:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};


const FavoriteMarker = {
    getAllFavoriteMarkers,
    getFavoriteMarkersByUsername,
    createFavoriteMarker,
    deleteFavoriteMarkerByUsernameAndTitle

    
}

module.exports = FavoriteMarker;