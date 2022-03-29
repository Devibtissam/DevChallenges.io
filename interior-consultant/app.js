const menuItems = document.querySelectorAll('.menu-items li');
const toggleMenu = document.querySelector('.toggle-menu');
const sideBar = document.querySelector('.display-sidebar');

function displayNav() {
  sideBar.classList.remove('close-menu');
  sideBar.classList.add('display-menu');
  const nav = document.createElement('ul');
  const closeBtn = document.createElement('i');
  closeBtn.className = 'ri-close-line';
  closeBtn.classList.add('close-btn');
  sideBar.append(closeBtn);

  menuItems.forEach((item) => {
    const menu = document.createElement('li');
    menu.innerHTML = item.innerHTML;
    menu.classList.add('menu-item');
    nav.append(menu);
  });
  sideBar.append(nav);

  closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('display-menu');
    sideBar.classList.add('close-menu');
    nav.remove();
    closeBtn.remove();
  });
}

toggleMenu.addEventListener('click', () => {
  displayNav();
});
