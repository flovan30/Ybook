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

exports.getSetByIdSet = async (req, res) => {
    const set = await Set.find({ _id: req.params['id_set'] })
    res.status(200).json({ set })
}

exports.postSet = async (req, res) => {
    // const set = new Set({
    //     id_user: req.body.UserId,
    //     id_race: req.body.race,
    //     id_classe: req.body.classe,
    //     name_set: req.body.NomStuff,
    //     id_casque: req.body.Casque,
    //     id_armure: req.body.Armure,
    //     id_bouclier: req.body.Bouclier,
    //     id_pantalons: req.body.Pantalon,
    //     id_gants: req.body.Gants,
    //     id_bottes: req.body.Bottes,
    //     id_arme: req.body.Arme,
    //     level: req.body.Niveau,

    // });
    let set = new Set(req.body)
    console.log(req.body)
    set.save().then(
        data => {
            res.status(201).json({
                responce: "Created"
            })
        })
        .catch(err => {
            res.status(400).json({
                responce: "ERROR",
                message: err
            })
        })
}