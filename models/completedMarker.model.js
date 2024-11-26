const pool = require('../config/db_pgSQL')
const queries = require('../utils/queries.js') // Queries SQL



// GET

const getAllCompletedMarkers = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllCompletedMarkers)
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
const getCompletedMarkersByUsername = async (username) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getCompletedMarkersByUsername, [username])
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
const createCompletedMarker = async (completed) => {
    const { username, marker_title } = completed;
    let client, result;

    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createCompletedMarker,[username, marker_title])
        result = data.rowCount
    } catch (err) {
        console.log('error marking as completed:', err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


// DELETE
//unmark as completed
const deleteCompletedMarkerByTitle = async (completedMarkerToDelete) => {
    const marker_title = completedMarkerToDelete;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteCompletedMarkerByTitle, [marker_title]);
        result = data.rowCount
        
    } catch (err) {
        console.log('Error unmarking as completed:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};


const CompletedMarker = {
    getAllCompletedMarkers,
    getCompletedMarkersByUsername,
    createCompletedMarker,
    deleteCompletedMarkerByTitle

    
}

module.exports = CompletedMarker;