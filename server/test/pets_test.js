//import the User model 
var Pet = require('../Models/petModel');  
const assert = require('assert'); 

describe('Creating Pet in MongoDB', () => { 
    it('Creates a New Pet', (done) => { 
        var newPet = new Pet({ name: 'Woof', breed: 'Siberian', species: 'Husky', gender: 'Male', color: 'White', location: 'Siberia' }); 
        const expectedName = 'Woof';
        
        //if the newPet is saved in db and it is not new 
        assert.equal(expectedName, newPet.name, "Name Does Not Match"); 
        done(); 
            
        }); 
});

describe('Checking types for pet schema', () => { 
    it('Checks if given items are correct types', (done) => { 
        var newPet2 = new Pet({ name: 'Woof2', breed: 'Siberian', species: 'Husky', gender: 'Male', color: 'Black', location: 'Siberia' });
        var testString = 'a string'
        if(typeof newPet2.color != typeof testString){
        //if any of the provided items are the wrong data type
            throw new TypeError('Expected values have wrong data type');
        }
        done();   
        }); 
});

describe('Checking if pet gender is correct', () => { 
    it('Checks if given gender is real', (done) => { 
        var newPet3 = new Pet({ name: 'Woof3', breed: 'Siberian', species: 'Husky', gender: 'Male', color: 'Grey', location: 'Siberia' });
        var genderM = 'Male';
        var genderF = 'Female';
        //if any of the provided gender is the wrong data type
        if(newPet3.gender == genderM || newPet3.gender == genderF){
        }
        else{
            throw new Error('Not a valid gender');
        }
        done();   
        }); 
});