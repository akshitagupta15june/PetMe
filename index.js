const navBar = document.getElementById('navbar');
const navBtn = document.getElementById('nav-button');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('hidden');
})