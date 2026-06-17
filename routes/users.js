const express = require("express");
const router = express.Router();
const User = require("../models/User.js"); 

router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al intentar crear un usuario" });
    }
});

router.get("/", async (req, res) => {
    try {
       
        const users = await User.find(); 
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al obtener los usuarios" });
    }
});

router.put("/id/:_id", async (req, res) => {
    try {
       
        const updatedUser = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });
        
        if (!updatedUser) {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }
        
        res.status(200).send(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al actualizar el usuario" });
    }
});

router.delete("/id/:_id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params._id);
        
        if (!deletedUser) {
            return res.status(404).send({ message: "Usuario no encontrado" });
        }
        
        res.status(200).send({ message: "Usuario eliminado con éxito", deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Hubo un problema al eliminar el usuario" });
    }
});

module.exports = router;