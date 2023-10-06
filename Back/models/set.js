const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema pour les objets
const setSchema = new Schema({
    id_user: String,
    id_race: String,
    id_classe: String,
    name_set: String,
    id_casque: String,
    id_armure: String,
    id_bouclier: String,
    id_pantalons: String,
    id_gants: String,
    id_bottes: String,
    id_arme: String,
    level: Number
}, { collection: 'set' })

module.exports = mongoose.model('Set', setSchema);