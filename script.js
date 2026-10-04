const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menu.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

const closeMenu = document.querySelector('.close-menu');

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
});
