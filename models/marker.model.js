const pool = require('../config/db_pgSQL')
const queries = require('../utils/queries.js') // Queries SQL



// GET

const getAllMarkers = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllMarkers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// GET BY type CONTROLLER PARAMS
const getMarkersByType = async (type) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getMarkersByType, [type])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const getMarkerByTitle = async (marker_title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getMarkerByTitle, [marker_title])
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
const createMarker = async (marker) => {
    const { marker_title, type, url, address, lat, long } = marker; //marker_title,type,url,address,lat,long
    let client, result;

    
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createMarker,[marker_title, type, url, address, lat, long])
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
const updateMarkerByTitle = async (updatedMarker, currentMarker) => {
    const { marker_title, type, url, address, lat, long } = updatedMarker;
    let client, result;
    try {
        client = await pool.connect();

        const data = await client.query(queries.updateMarkerByName, [marker_title, type, url, address, lat, long, currentMarker]);
        result = data.rows; // Devuelve la fila actualizada
    } catch (err) {
        console.log('Error updating marker:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};
// DELETE
const deleteMarkerByTitle = async (markerToDelete) => {
    const marker_title = markerToDelete;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteMarkerByTitle, [marker_title]);
        result = data.rowCount
        
    } catch (err) {
        console.log('Error deleting marker:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};



const Marker = {
    getAllMarkers,
    getMarkersByType,
    getMarkerByTitle,
    createMarker,
    updateMarkerByTitle,
    deleteMarkerByTitle,

    
}

module.exports = Marker;