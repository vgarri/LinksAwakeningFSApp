const DefaultMarker = require('../models/defaultMarker.model')

const getAllDefaultMarkers = async (id) => {
            return id
            ? await DefaultMarker.find({id},'-__v')
            : await DefaultMarker.find({},'-__v'); //{}

};

const getDefaultMarkerByType = async (type) => {
    return await DefaultMarker.findOne({ type });
};

const getDefaultMarkerById = async (id) => {
    return await DefaultMarker.findById(id);
};

const createDefaultMarker = async (DefaultMarkerdata) => {
    const defaultMarker = new DefaultMarker(DefaultMarkerdata);
    return await defaultMarker.save();
};
//aqui se pasa el id de objeto mongoDB
const editDefaultMarker = async (id, data) => {
    return await DefaultMarker.findByIdAndUpdate(id, data, { new: true });
};

const deleteDefaultMarker = async (id) => {
    
    return await DefaultMarker.findByIdAndDelete(id);
};

module.exports = {
    getAllDefaultMarkers,
    getDefaultMarkerByType,
    getDefaultMarkerById,
    createDefaultMarker,
    editDefaultMarker,
    deleteDefaultMarker
};