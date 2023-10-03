require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


// ##### MIDDLEWARE #####
app.use(express.json());
app.use(cors());


app.use((req, res) => {
    res.status(404).json({ error: 'Ressource introuvable' }).end();
});


exports.app = onRequest(app);