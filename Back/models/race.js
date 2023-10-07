const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema pour les race
const raceSchema = new Schema({
    name: String,
    img_path: String,
}, { collection: 'race' })

module.exports = mongoose.model('Race', raceSchema);