const CompletedMarker = require('../models/completedMarker.model'); 


const getAllCompletedMarkers = async (req, res) => {
    let completedMarkers;
    completedMarkers = await CompletedMarker.getAllCompletedMarkers();
    res.status(200).json(completedMarkers);
}
const getCompletedMarkersByUsername = async (req, res) => {
    const { username } = req.query;
    try {
        const CompletedMarkerData = await CompletedMarker.getCompletedMarkersByUsername(username);
        if (CompletedMarkerData) {
            res.status(200).json(CompletedMarkerData);
        } else {
            res.status(404).json({ error: 'CompletedMarker not found' });
        }
    } catch (error) {
        console.error('Error obtaining CompletedMarker by title:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const getCompletedMarkersByType= async (req, res) => {
    const { type } = req.query;
    try {
        const CompletedMarkerData = await CompletedMarker.getCompletedMarkersByType(type);
        if (CompletedMarkerData) {
            res.status(200).json(CompletedMarkerData);
        } else {
            res.status(404).json({ error: 'CompletedMarkers not found' });
        }
    } catch (error) {
        console.error('Error obtaining CompletedMarkers by type:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// Crear usuario //Post

const createCompletedMarker = async (req, res, next) => {
    try {

        const newCompletedMarker = req.body; // marker_title, username
        const response = await CompletedMarker.createCompletedMarker(newCompletedMarker); 
        res.status(201).json({
            "items_created": response,
            message: `CompletedMarker created:`,
            username: newCompletedMarker.username,
            marker_title: newCompletedMarker.marker_title,
        })
    
    } catch (error) {
        console.error('Error creating CompletedMarker:', error)

    }
}



const deleteCompletedMarkerByTitle = async (req, res) => {
    const { marker_title } = req.query; // {marker_title} le pasaremos el title por query
    try {
        const response = await CompletedMarker.deleteCompletedMarkerByTitle(marker_title);
        if (response) {
            res.status(200).json({
                message: `Completed Marker: ${marker_title} was deleted successfully`,
                data: response
            });
        } else {
            res.status(404).json({ error: 'Completed Marker with that title was not found' });
        }
    } catch (error) {
        console.error('Error deleting Completed Marker:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


module.exports = {
    getAllCompletedMarkers,
    getCompletedMarkersByUsername,
    createCompletedMarker,
    deleteCompletedMarkerByTitle
}