const mobileMenuBtnElement = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle('open'); //toggle method removes class if it exists, and adds  if not
}

mobileMenuBtnElement.addEventListener('click', toggleMobileMenu);