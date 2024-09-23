export default function readMoreButton() {

  const readMore = document.querySelector('.readMoreButton');
  const showText = document.querySelector('.readMore__showText');
  const hideText = document.querySelector('.readMore__hideText');
  const textHidden = document.querySelector('.text_hidden');
  const textSuperHidden = document.querySelector('.text_superHidden');

  readMore.addEventListener('click', () => {
    readMore.classList.toggle('rotate');
    showText.classList.toggle('hiddenText');
    hideText.classList.toggle('hiddenText');
    textHidden.classList.toggle('showText');
    textSuperHidden.classList.toggle('showText');
  });

};

readMoreButton();