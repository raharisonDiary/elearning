const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config();

const authRoutes = require('./routes/auth'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connection DB
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log("✅ MongoDB Atlas tafiditra!"))
  .catch(err => console.error("❌ Error connection:", err));

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("Backend E-learning mandeha tsara!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur mandeha amin'ny port ${PORT}`);
});