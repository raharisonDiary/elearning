const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();

// 1. Import-eo ny Routes (Ataovy azo antoka fa misy fichiers any amin'ny folder routes)
const authRoutes = require('./routes/auth'); 

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || "mongodb+srv://diary:diary@cluster0.q60ysss.mongodb.net/elearning?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Atlas tafiditra!"))
  .catch(err => console.error("❌ Error connection:", err));

// 2. Ampiasao ny routes eto (Ity no nampisy 404 teo)
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("Mandehana tsara ny Backend-ntsika!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur mandeha amin'ny port ${PORT}`);
});