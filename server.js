const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Fifandraisana amin'ny MongoDB
// Hampiasaintsika ny variable d'environnement any aoriana
const mongoURI = process.env.MONGO_URI || "mongodb+srv://diary:diary@cluster0.q60ysss.mongodb.net/elearning?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Atlas tafiditra!"))
  .catch(err => console.error("❌ Error connection:", err));

// Route tsotra hanamarinana raha mandeha ny serveur
app.get('/', (req, res) => {
  res.send("Mandehana tsara ny Backend-ntsika!");
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur mandeha amin'ny port ${PORT}`);
});