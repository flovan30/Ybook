const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema pour les stats
const statsSchema = new Schema({
    statName: String,
    statValue: String,
})

// schema pour les objets
const itemSchema = new Schema({
    name: String,
    type: String,
    level: Number,
    stats: [statsSchema],
    img_path: String,
}, { collection: 'item' })

module.exports = mongoose.model('Item', itemSchema);