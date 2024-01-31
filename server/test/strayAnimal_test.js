//import the User model 
var strayAnimal = require('../Models/strayAnimalReportModel');  
const assert = require('assert'); 

describe('Creating Stray Animal Report in MongoDB', () => { 
    it('Creates a Stray Animal Report', (done) => { 
        var newAnimalReport = new strayAnimal({ name: 'Buddy' }); 
        newAnimalReport.save() // returns a promise after some time 
        assert(newAnimalReport.isNew); 
        done(); 
        }); 
});