const connectDB = require('../config/database');
const Race = require('../models/race');

// recupérer toutes les races
exports.getAllRace = async (req, res) => {
    const races = await Race.find({})
    res.status(200).json({ races })
};

exports.getRaceByName = async (req, res) => {
    const race = await Race.find({ name: req.params['name'] })
    res.status(200).json({ race })
};