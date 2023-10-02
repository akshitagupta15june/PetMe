/* Here is the Javascript code for Chatbot Functionality  */


const chatbotIcon = document.getElementById('chatbot-icon');
const chatInterface = document.getElementById('chat-interface');
const chatMessages = document.getElementById('chat-messages');
const userOptions = document.getElementById('user-options');

chatbotIcon.addEventListener('click', () => {
  chatbotIcon.style.display = 'none';
  chatInterface.style.display = 'block';
  showUserOptions();
})

function showUserOptions() {
  userOptions.style.display = 'block';
}


userOptions.addEventListener('click', (e)=>{
  if(e.target.classList.contains('option-button')){
    const selectedOption = e.target.getAttribute('data-option');
    displayUserMessage(selectedOption);
    processUserOption(selectedOption);
  }
})

function displayUserMessage(option){
  const userMessage = document.createElement('div');
  userMessage.className = 'user-message';
  userMessage.textContent = `User: ${option}`
  chatMessages.appendChild(userMessage);
}

function processUserOption(option){
  const response = generateResponse(option);
  displayChatbotResponse(response);
}

function generateResponse(option){
  switch (option) {
    case 'Want to Donate':
      window.location.href = "https://akshitagupta15june.github.io/PetMe/donate.html";
      return 'Redirecting you to the donation page...';
    case 'Want to Report':
      window.location.href = "https://akshitagupta15june.github.io/PetMe/reportstary.html";
      return 'Redirecting you to the report page...';
      
    case 'Want to Contact':
      window.location.href = "https://akshitagupta15june.github.io/PetMe/index.html#contact";
      return 'Redirecting you to the contact page...';
      
    default:
      return `Please choose Valid Option`;
  }
}

function displayChatbotResponse(response){
  const chatbotResponse = document.createElement('div');
  chatbotResponse.className = 'chatbot-response'
  chatbotResponse.textContent = `Bot: ${response}`;
  chatMessages.appendChild(chatbotResponse);
}