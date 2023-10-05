const connectDB = require('../config/database');
const Classe = require('../models/classe');


exports.getAllClasse = async (req, res) => {
    const classe = await Classe.find({})
    res.status(200).json({ classe })
};


exports.getClasseByName = async (req, res) => {
    const classe = await Classe.find({ name: req.params['name'] })
    res.status(200).json({ classe })
};