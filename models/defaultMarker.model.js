const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        unique: false
    },

    x: {
        type: Number,
        required: true,
        unique: false

    },
    y: {
        type: Number,
        required: true,
        unique: false
    },
    z: {
        type: Number,
        required: true,
        unique: false
    },
    urlImg: {
        type: String,
        required: false,
        validate: {
            validator: function (url) {
                if (url.indexOf('http') != -1)
                    return true;
                else {
                    return false;
                }
            },
            message: "Please, enter a valid URL"
        }
    }
}
// Crear el esquema
const defaultMarkerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const DefaultMarker = mongoose.model('DefaultMarker', defaultMarkerSchema);

module.exports = DefaultMarker
