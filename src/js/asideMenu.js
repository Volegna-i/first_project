export default function showAsideMenu() {

  const burgerButton = document.querySelector('.burgerButton');
  const aside = document.querySelector('.asideMenu');
  const siteContainer = document.querySelector('.siteContainer');
  const asideBurgerButton = document.querySelector('.asideMenu__header__burgerButton--close');
  const bodyScroll = document.querySelector('body');

  burgerButton.addEventListener ('click', () => {
    aside.classList.toggle('aside--active');
    siteContainer.classList.toggle('body--opacity');
    bodyScroll.classList.toggle('aside--active');
  });

  asideBurgerButton.addEventListener ('click', () => {
    aside.classList.toggle('aside--active');
    siteContainer.classList.toggle('body--opacity');
    bodyScroll.classList.toggle('aside--active');
  });

};

showAsideMenu();