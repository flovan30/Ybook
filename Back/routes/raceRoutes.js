const express = require('express');
const router = express.Router();

const raceController = require('../controllers/raceController');

router.get('/race', raceController.getAllRace);
router.get('/race/name/:name', raceController.getRaceByName)

module.exports = router;