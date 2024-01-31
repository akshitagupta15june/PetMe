//import the User model 
var Donation = require('../Models/donationModel');  
var Pet = require('../Models/petModel');  
const assert = require('assert'); 

describe('Creating Donation in MongoDB', () => { 
    it('Creates a New Donation', (done) => { 
        var newPet4 = new Pet({ name: 'Woof4', breed: 'American', species: 'Husky', gender: 'Male', color: 'Light Grey', location: 'Seattle' }); 
        var newDonation = new Donation({ name: 'John Doe', email: 'johndoe@gmail.com', address: '901 12th Ave', city: 'Seattle', state: 'WA', country: "USA", phone: 2062966000, pet: newPet4 }); 
        newDonation.save() // returns a promise after some time 
        assert(newDonation.isNew); 
        done(); 
        }); 
});

describe('Check if pet is correctly assigned to donation', () => { 
    it('Checking if pet and donation are assigned correctly', (done) => { 
        var newPet5 = new Pet({ name: 'Woof5', breed: 'American', species: 'Husky', gender: 'Male', color: 'Light Grey', location: 'Seattle' }); 
        var newDonation2 = new Donation({ name: 'Jane Doe', email: 'janedoe@gmail.com', address: '901 12th Ave', city: 'Seattle', state: 'WA', country: "USA", phone: 2062966000, pet: newPet5 }); 
        newDonation2.save() // returns a promise after some time 
        assert.equal(newPet5.name, newDonation2.pet.name, "Name Does Not Match"); 
        done(); 
        }); 
});