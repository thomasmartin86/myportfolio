const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const menuBranding = document.querySelector('.menu-branding');
let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}
const workItems = document.querySelectorAll('.item-image');
workItems.forEach(item =>
  item.addEventListener('mouseover', () => {
    item.previousElementSibling.innerHTML =
      '<div style="margin:auto; text-align:center; padding:.25rem;"><i class="fas fa-sad-cry fa-2x"></i> This project is not currently being hosted...</div>  ';
    item.previousElementSibling.style.display = 'block';
  })
);
workItems.forEach(item =>
  item.addEventListener('mouseout', () => {
    item.previousElementSibling.innerHTML = '';
    item.previousElementSibling.display = 'none';
  })
);
const devDependancy = document.querySelectorAll('.devTools');
devDependancy.forEach(item =>
  item.addEventListener('mouseover', () => {
    item.previousElementSibling.innerHTML =
      '<div style="margin:auto; text-align:center; padding:.25rem;"><i class="fas fa-exclamation-circle"></i> This project requires the Redux Dev Tools Browser Extension to display correctly...</div>  ';
    item.previousElementSibling.style.display = 'block';
  })
);
devDependancy.forEach(item =>
  item.addEventListener('mouseout', () => {
    item.previousElementSibling.innerHTML = '';
    item.previousElementSibling.display = 'none';
  })
);
