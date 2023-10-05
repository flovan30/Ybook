const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema pour les stats
const statsSchema = new Schema({
    pv: Number,
    armure: Number,
    feu: Number,
    eau: Number,
    air: Number,
    terre: Number,
    lumiere: Number,
    tenebre: Number,
    res_feu: Number,
    res_eau: Number,
    res_air: Number,
    res_terre: Number,
    res_lumiere: Number,
    res_tenebre: Number,
    sort: Number,
    arme: Number,
})

// schema pour les objets
const classeSchema = new Schema({
    name: String,
    img_path: String,
    stat: [statsSchema]
}, { collection: 'classe' })

module.exports = mongoose.model('Classe', classeSchema);