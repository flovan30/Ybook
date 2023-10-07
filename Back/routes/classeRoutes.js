const express = require('express');
const router = express.Router();

const classeController = require('../controllers/classeController');

router.get('/classe', classeController.getAllClasse);
router.get('/classe/name/:name', classeController.getClasseByName);
router.get('/classe/id/:id', classeController.getClasseById);


module.exports = router;