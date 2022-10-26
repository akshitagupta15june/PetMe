const express = require('express');
const donationController = require('../controllers/donationController');

const Router = express.Router();

// All your routes will go here
Router.get('/:id', donationController.getDonation);
Router.delete('/:id', donationController.deleteDonation);

Router.post('/', donationController.addDonation);
Router.get('/', donationController.getAllDonations);


module.exports = Router;
