const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Mila manana model User ianao

// --- REGISTER ---
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        // Jereo raha efa misy ilay email
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ error: "Cet email est déjà utilisé" });

        // Mamorona mpampiasa vaovao
        user = new User({ name, email, password, role });
        await user.save();

        res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de l'inscription" });
    }
});

// --- LOGIN ---
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Mitady ilay mpampiasa amin'ny alalan'ny email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Email non trouvé" });

        // Manamarina ny password (tsotra aloha eto)
        if (user.password !== password) {
            return res.status(400).json({ error: "Mot de passe incorrect" });
        }

        // Raha mety dia mandefa ny mombamomba azy
        res.json({
            name: user.name,
            role: user.role,
            email: user.email
        });
    } catch (err) {
        res.status(500).json({ error: "Erreur lors de la connexion" });
    }
});

module.exports = router;