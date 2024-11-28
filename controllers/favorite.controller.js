const FavoriteMarker = require('../models/favorite.model'); 


const getAllFavoriteMarkers = async (req, res) => {
    let favoriteMarkers;
    favoriteMarkers = await FavoriteMarker.getAllFavoriteMarkers();
    res.status(200).json(favoriteMarkers);
}
const getFavoriteMarkersByUsername = async (req, res) => {
    const { username } = req.query;
    try {
        const FavoriteMarkerData = await FavoriteMarker.getFavoriteMarkersByUsername(username);
        if (FavoriteMarkerData) {
            res.status(200).json(FavoriteMarkerData);
        } else {
            res.status(404).json({ error: 'FavoriteMarker not found' });
        }
    } catch (error) {
        console.error('Error obtaining FavoriteMarker by username:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
// const getFavoriteMarkersByType= async (req, res) => {
//     const { type } = req.query;
//     try {
//         const FavoriteMarkerData = await FavoriteMarker.getFavoriteMarkersByType(type);
//         if (FavoriteMarkerData) {
//             res.status(200).json(FavoriteMarkerData);
//         } else {
//             res.status(404).json({ error: 'FavoriteMarkers not found' });
//         }
//     } catch (error) {
//         console.error('Error obtaining FavoriteMarkers by type:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// }

// Crear usuario //Post

const createFavoriteMarker = async (req, res, next) => {
    try {

        const newFavoriteMarker = req.body; // marker_title, username
        const response = await FavoriteMarker.createFavoriteMarker(newFavoriteMarker); 
        res.status(201).json({
            "items_created": response,
            message: `FavoriteMarker created:`,
            username: newFavoriteMarker.username,
            marker_title: newFavoriteMarker.marker_title,
        })
    
    } catch (error) {
        console.error('Error creating FavoriteMarker:', error)

    }
}



const deleteFavoriteMarkerByUsernameAndTitle = async (req, res) => {
    const { username, marker_title } = req.query; // {marker_title} le pasaremos el title por query
    try {
        const response = await FavoriteMarker.deleteFavoriteMarkerByUsernameAndTitle(req.query);
        if (response) {
            res.status(200).json({
                message: `Fav Marker: ${marker_title} was deleted successfully`,
                data: response
            });
        } else {
            res.status(404).json({ error: 'Favorite Marker with that title was not found' });
        }
    } catch (error) {
        console.error('Error deleting Completed Marker:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    getAllFavoriteMarkers,
    getFavoriteMarkersByUsername,
    createFavoriteMarker,
    deleteFavoriteMarkerByUsernameAndTitle
}