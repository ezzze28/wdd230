
const hamburger = document.getElementById('hamburgerTargetAudience');
const menu = document.querySelector('.mainMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});
