const express = require('express');
// Rutas de marcadores
const markerController = require("../controllers/marker.controller");
const router = express.Router();


router.get('/', markerController.getAllMarkers);
router.get('/marker_title',markerController.getMarkerByTitle);
router.get('/type',markerController.getMarkersByType);
router.post('/', markerController.createMarker);
router.put('/marker_title',markerController.updateMarkerByTitle);
router.delete('/marker_title', markerController.deleteMarkerByTitle);

module.exports = router;