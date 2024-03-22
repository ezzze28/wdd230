window.addEventListener('DOMContentLoaded', (event) => {
  const banner = document.getElementById('banner');
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  if (currentDay === 1 || currentDay === 2) {
    banner.style.display = 'block';
  }
});


const hamburger = document.getElementById('hamburgerChamber');
const menu = document.querySelector('.toggleMenu');

 hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  });
