const express = require('express');
const petController = require('../controllers/petController');

const Router = express.Router();

// All your routes will go here

Router.get('/:id/', petController.getPet);
Router.delete('/:id', petController.deletePet);

Router.post('/', petController.addPet);
Router.get('/', petController.getAllPets);



module.exports = Router;
