document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    const favoritesTab = document.getElementById('favorites-tab');
    const closeFavoritesButton = document.getElementById('close-favorites');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', toggleFavorite);
    });

    favoritesTab.addEventListener('click', openFavoritesPanel);
    closeFavoritesButton.addEventListener('click', closeFavoritesPanel);

    window.addEventListener('scroll', showFavoritesTab); // scroll event listener to show/hide favorites panel

    updateFavoriteButtons();
    updateFavoritesPanel();
});

function toggleFavorite(event) {
    const petId = event.target.closest('.favorite-button').dataset.petId; // gets pet id when clicked
    const favorites = JSON.parse(localStorage.getItem('petFavorites')) || []; // pulls favorites from local storage, else empty string
    
    const index = favorites.indexOf(petId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(petId);
    }
    
    localStorage.setItem('petFavorites', JSON.stringify(favorites)); // saves favorites to local storage
    console.log('Current favorites:', favorites);
    updateFavoriteButtons();
    updateFavoritesPanel();
}

function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('petFavorites')) || [];
    const buttons = document.querySelectorAll('.favorite-button');
    
    buttons.forEach(button => {
        const petId = button.dataset.petId;
        if (favorites.includes(petId)) {
            button.innerHTML = '<i class="ri-heart-fill"></i>';
            button.classList.add('favorited');
        } else {
            button.innerHTML = '<i class="ri-heart-line"></i>';
            button.classList.remove('favorited');
        }
    });
}

function openFavoritesPanel() {
    const favoritesPanel = document.getElementById('favorites-panel');
    favoritesPanel.style.width = '300px';
}

function closeFavoritesPanel() {
    const favoritesPanel = document.getElementById('favorites-panel');
    favoritesPanel.style.width = '0';
}

function updateFavoritesPanel() {
    console.log('Updating favorites panel');
    const favorites = JSON.parse(localStorage.getItem('petFavorites')) || [];
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    console.log('Number of favorites:', favorites.length);

    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>No favorites added yet.</p>';
        return;
    }

    // creates and appends favorite pet elements to the panel
    favorites.forEach(petId => {
        const petCard = document.querySelector(`.main-card[data-pet-id="${petId}"]`);

        console.log('Pet card found:', petCard);
        if (petCard) {
            const petName = petCard.querySelector('h5').textContent.trim();
            const petType = petCard.querySelector('ul li:first-child span').textContent.trim();
            const petImage = petCard.querySelector('img').src;
            
            const favoritePet = document.createElement('div');
            favoritePet.classList.add('mb-4', 'p-4', 'bg-gray-100', 'rounded', 'flex', 'items-center');
            favoritePet.innerHTML = `
                <img src="${petImage}" alt="${petName}" class="w-16 h-16 object-cover rounded-full mr-4">
                <div>
                    <p class="font-bold text-lg">${petName}</p>
                    <p class="text-gray-600">${petType}</p>
                </div>
                <button class="ml-auto bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600" onclick="removeFavorite('${petId}')">Remove</button>
            `;
            favoritesList.appendChild(favoritePet);
        }
    });
}

function removeFavorite(petId) {
    let favorites = JSON.parse(localStorage.getItem('petFavorites')) || [];
    favorites = favorites.filter(id => id !== petId);
    localStorage.setItem('petFavorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    updateFavoritesPanel();
}

// function to show/hide the favorites tab based on scroll position
function showFavoritesTab() {
    const meetPetsSection = document.getElementById('meet');
    const favoritesTab = document.getElementById('favorites-tab');
    const rect = meetPetsSection.getBoundingClientRect();
    
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        favoritesTab.style.right = '0';
    } else {
        favoritesTab.style.right = '-40px';
    }
}
