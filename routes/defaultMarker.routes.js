const DefaultMarkerController = require('../controllers/defaultMarker.controller');
const router = require('express').Router();


router.get("/:id?", DefaultMarkerController.getAllDefaultMarkers);
router.post("/", DefaultMarkerController.createDefaultMarker);
router.put("/:id", DefaultMarkerController.updateDefaultMarker);
router.delete("/:id", DefaultMarkerController.deleteDefaultMarker);

module.exports = router;