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
