const express = require('express');
const strayAnimalReportController = require('../controllers/strayAnimalReportController');

const Router = express.Router();

// All your routes will go here

Router.post('/', strayAnimalReportController.addReportAnimal);
Router.delete('/:id', strayAnimalReportController.deleteAnimalReport);
Router.get('/:id/', strayAnimalReportController.getAnimalReportById);

Router.get('/', strayAnimalReportController.getAllReports);



module.exports = Router;
