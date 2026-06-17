const express = require("express");
const router = express.Router();
const User = require("../models/User.js"); // Importamos nuestro molde

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al intentar crear un usuario" });
    }
});

module.exports = router;