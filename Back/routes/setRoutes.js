const express = require('express');
const router = express.Router();

const SetController = require('../controllers/setController');
const { set } = require('mongoose');

router.get('/set', SetController.getAllSets);
router.get('/set/user/:id_user', SetController.getAllSetsByUser_id);
router.get('/set/:id_set', SetController.getSetByIdSet)
router.post('/set', SetController.postSet);


module.exports = router;