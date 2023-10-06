const connectDB = require('../config/database');
const Item = require('../models/Item');


// recupérer tous les items
exports.getAllItems = async (req, res) => {
    const items = await Item.find({})
    res.status(200).json({ items })
};

// recupérer les items celon le type
exports.getItemsByType = async (req, res) => {
    const items = await Item.find({ type: req.params['type'] })
    res.status(200).json({ items })
};

// recupérer les items celon le niveau
exports.getItemsByLevel = async (req, res) => {
    const items = await Item.find({ level: req.params['level'] })
    res.status(200).json({ items })
};

// name by _id
exports.getItemsById = async (req, res) => {
    const item = await Item.find({ _id: req.params['id'] })
    res.status(200).json({ item })
}