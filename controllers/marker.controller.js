const Marker = require('../models/marker.model'); // Importar el modelo de la BBDD
// const { validationResult } = require("express-validator");

const getAllMarkers = async (req, res) => {
    let markers;
    markers = await Marker.getAllMarkers();

    res.status(200).json(markers); // 
}
const getMarkerByTitle= async (req, res) => {
    const { title } = req.query;
    try {
        const MarkerData = await Marker.getMarkerByTitle(title);
        if (MarkerData) {
            res.status(200).json(MarkerData);
        } else {
            res.status(404).json({ error: 'Marker not found' });
        }
    } catch (error) {
        console.error('Error obtaining Marker by title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const getMarkersByType= async (req, res) => {
    const { type } = req.query;
    try {
        const MarkerData = await Marker.getMarkersByType(type);
        if (MarkerData) {
            res.status(200).json(MarkerData);
        } else {
            res.status(404).json({ error: 'Markers not found' });
        }
    } catch (error) {
        console.error('Error obtaining Markers by type:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Crear usuario //Post

const createMarker = async (req, res, next) => {
    try {

        const newMarker = req.body; // title, type, x, y, z 
        const response = await Marker.createMarker(newMarker); 
        res.status(201).json({
            "items_created": response,
            message: `Marker created: ${req.body.title}`,
            title: newMarker.title,
            type: newMarker.type,
            x: newMarker.x,
            y: newMarker.y,
            z: newMarker.z
        })
    
    } catch (error) {
        console.error('Error creating Marker:', error)

    }
}

const updateMarkerByTitle = async (req, res) => {
    const { title } = req.query; 
    const updatedMarkerData = req.body; 
    try {
        const response = await Marker.updateMarkerByTitle(title);
        if (response) {
            res.status(200).json({
                message: `Marker updated: ${title}`,
                data: updatedMarkerData
            });
        } else {
            res.status(404).json({ error: 'Marker not found' });
        }
    } catch (error) {
        console.error('Error updating Marker:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const deleteMarkerByTitle = async (req, res) => {
    const { title } = req.query; // {title} le pasaremos el email por query
    try {
        const response = await Marker.deleteMarkerByTitle(title);
        if (response) {
            res.status(200).json({
                message: `Marker: ${title} was deleted successfully`,
                data: response
            });
        } else {
            res.status(404).json({ error: 'Marker with that title was not found' });
        }
    } catch (error) {
        console.error('Error deleting Marker:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
// const getAllFavoritesFromMarker = async (req, res) => {
//     const id = req.params.id;
//     console.log(id)
//     try {
//         const MarkerData = await Marker.getAllFavoritesFromMarker(id);
//         if (MarkerData) {
//             res.status(200).json(MarkerData);
//         } else {
//             res.status(404).json({ error: 'Marker not found' });
//         }
//     } catch (error) {
//         console.error('Error obtaining favorites by email:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }
// const markAsFavorite = async (req, res) => {
//     //mongo_id y mongo_title van a venir de un fetch, Marker_id viene del login(?)
//     const newFavorite = req.body; // {Marker_id,mongo_title,mongo_id}
//     const response = await Marker.markAsFavorite(newFavorite);
//     res.status(201).json({
//         "items_created": response,
//         message: `New Favorite created for Marker: ${req.body.Marker_id}`,
//         data: newFavorite
//     });
// }
// const unmarkAsFavorite = async (req, res) => {
//     const favorite_id = req.params.favorite_id; // {email} le pasaremos el email por el body
//     try {
//         const response = await Marker.unmarkAsFavorite(favorite_id);
//         if (response) {
//             res.status(200).json({
//                 message: `favorite was deleted successfully`,
//                 data: response
//             });
//         } else {
//             res.status(404).json({ error: 'favorite was not found' });
//         }
//     } catch (error) {
//         console.error('Error deleting Marker:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

module.exports = {
    getAllMarkers,
    getMarkersByType,
    getMarkerByTitle,
    createMarker,
    updateMarkerByTitle,
    deleteMarkerByTitle,
    // getAllFavoritesFromMarker,
    // markAsFavorite,
    // unmarkAsFavorite

}