require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const port = process.env.SERVER_PORT || '3000'
const app = express();
const cors = require('cors');


// ##### MIDDLEWARE #####
app.use(express.json());
app.use(cors());

// ##### ROUTES #####
const itemRoutes = require('./routes/itemRoutes');
const classeRoutes = require('./routes/classeRoutes');
const raceRoutes = require('./routes/raceRoutes');
const setRoutes = require('./routes/setRoutes');

// ##### UTILISATION DES ROUTES #####
app.use('/api', itemRoutes);
app.use('/api', classeRoutes);
app.use('/api', raceRoutes)
app.use('/api', setRoutes);


connectDB()

// ##### GESTION DES ROUTES INCONNU #####
app.use((req, res) => {
    res.status(404).json({ error: 'Ressource introuvable' }).end();
});


app.listen(port)