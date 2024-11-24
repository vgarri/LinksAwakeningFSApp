const express = require('express');
// Rutas de marcadores
const markerController = require("../controllers/marker.controller");
const router = express.Router();


router.get('/', markerController.getAllMarkers);
router.get('/title',markerController.getMarkerByTitle);
router.get('/type',markerController.getMarkersByType);
router.post('/', markerController.createMarker);
router.put('/email',markerController.updateMarkerByTitle);
router.delete('/email', markerController.deleteMarkerByTitle);

module.exports = router;