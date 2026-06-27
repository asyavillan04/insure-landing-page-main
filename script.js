const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#primary-navigation');
const navIcon = navToggle.querySelector('.nav-toggle__icon');

function toggleMenu() {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  navIcon.src = isOpen ? 'images/icon-close.svg' : 'images/icon-hamburger.svg';
}

navToggle.addEventListener('click', toggleMenu);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    toggleMenu();
  }
});