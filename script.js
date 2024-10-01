const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('drag', () => {
  navLinks.classList.toggle('active');
});
