// Select the toggle button and menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
 
// Add click event to toggle "active" class
toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});