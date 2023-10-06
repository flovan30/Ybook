const connectDB = require('../config/database');
const Set = require('../models/set');

exports.getAllSets = async (req, res) => {
    const sets = await Set.find({})
    res.status(200).json({ sets })
};

exports.getAllSetsByUser_id = async (req, res) => {
    const sets = await Set.find({ id_user: req.params['id_user'] })
    res.status(200).json({ sets })
};