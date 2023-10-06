const express = require('express');
const router = express.Router();

const SetController = require('../controllers/setController');

router.get('/set', SetController.getAllSets);
router.get('/set/user/:id_user', SetController.getAllSetsByUser_id);


module.exports = router;