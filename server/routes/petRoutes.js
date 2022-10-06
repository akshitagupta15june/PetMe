const express = require('express');
const petController = require('../controllers/petController');

const Router = express.Router();

// All your routes will go here
Router.post('/', petController.addPet);
Router.get('/', petController.getAllPets);
Router.get('/pet/:id', petController.getAllPets);
Router.delete('/pet/:id', petController.deletePet);


module.exports = Router;
