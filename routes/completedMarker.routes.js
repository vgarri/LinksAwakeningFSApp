const express = require('express');
// Rutas de marcadores
const completedMarkerController = require("../controllers/completedMarker.controller");
const router = express.Router();


router.get('/', completedMarkerController.getAllCompletedMarkers);
router.get('/username',completedMarkerController.getCompletedMarkersByUsername);
router.post('/', completedMarkerController.createCompletedMarker);
router.delete('/marker_title', completedMarkerController.deleteCompletedMarkerByTitle);

module.exports = router;