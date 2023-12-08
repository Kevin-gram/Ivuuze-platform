document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burger-icon');
    const navLinks = document.querySelector('.nav-links');
  
    burgerIcon.addEventListener('click', function () {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        navLinks.style.display = 'flex';
      } else {
        navLinks.style.display = 'none';
      }
    });
  });
  