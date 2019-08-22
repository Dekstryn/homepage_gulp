const navSwitcher = document.querySelector('.menu__switcher--js')

navSwitcher.addEventListener('click', (e) =>{
  const navigationList = document.querySelector('.menu__text--js');
  navigationList.classList.toggle('menu__text--visible');
});
