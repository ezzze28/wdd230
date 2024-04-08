
const hamburger = document.getElementById('hamburgerDesign');
const menu = document.querySelector('.mainMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
