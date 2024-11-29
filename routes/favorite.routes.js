const express = require('express');
// Rutas de marcadores
const FavoriteController = require("../controllers/favorite.controller");
const router = express.Router();


router.get('/', FavoriteController.getAllFavoriteMarkers);
router.get('/username',FavoriteController.getFavoriteMarkersByUsername);
router.post('/', FavoriteController.createFavoriteMarker);
router.delete('/marker', FavoriteController.deleteFavoriteMarkerByUsernameAndTitle);

module.exports = router;

// /marker?username=john_doe&marker_title=my_favorite_marker