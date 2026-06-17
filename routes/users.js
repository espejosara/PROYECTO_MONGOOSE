const express = require("express");
const router = express.Router();
const User = require("../models/User.js"); 

// Endpoint para crear un usuario (CREATE)
router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al intentar crear un usuario" });
    }
});

// Endpoint para leer todos los usuarios (READ)
router.get("/", async (req, res) => {
    try {
        // .find() sin nada dentro significa "búscame TODOS los documentos de esta colección"
        const users = await User.find(); 
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al obtener los usuarios" });
    }
});

module.exports = router;