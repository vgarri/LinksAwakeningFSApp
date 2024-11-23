const DefaultMarkerService = require('../services/defaultMarker.service');


// CREATE
const createDefaultMarker = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await DefaultMarkerService.createDefaultMarker(data);
        res.status(201).json({
            message: "marker created successfully",
            data: answer
        });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// READ
const getAllDefaultMarkers = async (req, res) => {
    try {
        const DefaultMarker = await DefaultMarkerService.getAllDefaultMarkers();
        res.status(200).json(DefaultMarker); // Respuesta de la API para 1 DefaultMarker
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// UPDATE
const updateDefaultMarker = async (req, res) => {

    try {
        const editedDefaultMarker = await DefaultMarkerService.editDefaultMarker(req.params.id, req.body);//el id lo coge por param en la ruta
        if (editedDefaultMarker) {
            res.status(200).json({
                "DefaultMarker_updated": editedDefaultMarker.title,
                data: editedDefaultMarker
            });
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }

}

// DELETE
const deleteDefaultMarker = async (req, res) => {
    try {
        const deletedDefaultMarker = await DefaultMarkerService.deleteDefaultMarker(req.params.id);//borramos por id en ruta
        if (deletedDefaultMarker) {
            res.status(200).json({
                message: `marker: ${deletedDefaultMarker.name} deleted successfully`
            });
        }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }

}



module.exports = {
    createDefaultMarker,
    getAllDefaultMarkers,
    updateDefaultMarker,
    deleteDefaultMarker
    
}