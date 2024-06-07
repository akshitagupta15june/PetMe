// form-validation.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const nameInput = document.getElementById('name');
    const numberInput = document.getElementById('number');
    const messageInput = document.getElementById('message');
    const confirmCheckbox = document.getElementById('confirm');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
      let phonePattern = /^[0-9]{10}$/;
  
      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
      }
  
      if (!phonePattern.test(numberInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        isValid = false;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Please report the location where the pet was found.');
        isValid = false;
      }
  
      if (!confirmCheckbox.checked) {
        alert('Please confirm that you are not a robot.');
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  