export default function showCallback() {

  const headerCallbackButton = document.querySelector('.callButton');
  const asideCallbackButton = document.querySelector('.asideMenu__footer__callButton');
  const siteContainer = document.querySelector('.siteContainer');
  const callbackCloseButton = document.querySelector('.callback__close-button');
  const callback = document.querySelector('.callback');
  const aside = document.querySelector('.asideMenu');

  headerCallbackButton.addEventListener ('click', () => {
    callback.classList.toggle('callback--active');
    siteContainer.classList.toggle('body--opacity');
  });

  asideCallbackButton.addEventListener ('click', () => {
    callback.classList.toggle('callback--active');
    aside.classList.toggle('aside--active');
  });

  callbackCloseButton.addEventListener ('click', () => {
    callback.classList.toggle('callback--active');
    siteContainer.classList.toggle('body--opacity');
  });

};

showCallback();