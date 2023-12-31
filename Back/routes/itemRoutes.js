const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

router.get('/item', itemController.getAllItems);
router.get('/item/type/:type', itemController.getItemsByType);
router.get('/item/level/:level', itemController.getItemsByLevel);
router.get('/item/:id', itemController.getItemsById);


module.exports = router;