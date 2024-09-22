export default function showAsideMenu() {

  const burgerButton = document.querySelector('.burgerButton');
  const aside = document.querySelector('.asideMenu');
  const siteContainer = document.querySelector('.siteContainer');
  const asideBurgerButton = document.querySelector('.asideMenu__header__burgerButton--close');

  burgerButton.addEventListener ('click', () => {
    aside.classList.toggle('aside--active');
    siteContainer.classList.toggle('body--opacity');
  });

  asideBurgerButton.addEventListener ('click', () => {
    aside.classList.toggle('aside--active');
    siteContainer.classList.toggle('body--opacity');
  });

};

showAsideMenu();