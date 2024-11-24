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
const getMarkerByTitle = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getMarkerByTitle, [title])
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
    const { title, type, x, y, z } = marker;
    let client, result;

    
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createMarker,[title, type, x, y, z])
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
    const { title, type, x, y, z } = updatedMarker;
    let client, result;
    try {
        client = await pool.connect();

        const data = await client.query(queries.updateMarkerByName, [title, type, x, y, z, currentMarker]);
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
    const title = markerToDelete;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteMarkerByTitle, [title]);
        result = data.rowCount
        
    } catch (err) {
        console.log('Error deleting marker:', err);
        throw err;
    } finally {
        client.release();
    }
    return result;
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



const Marker = {
    getAllMarkers,
    getMarkersByType,
    getMarkerByTitle,
    createMarker,
    updateMarkerByTitle,
    deleteMarkerByTitle,
    // getAllFavoritesFromUser,
    // markAsFavorite,
    // unmarkAsFavorite
    
}

module.exports = Marker;