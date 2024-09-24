export default function showFeedback() {

  const headerFeedbackButton = document.querySelector('.chatButton');
  const asideFeedbackButton = document.querySelector('.asideMenu__footer__chatButton');
  const siteContainer = document.querySelector('.siteContainer');
  const feedbackCloseButton = document.querySelector('.feedback__close-button');
  const feedback = document.querySelector('.feedback');
  const aside = document.querySelector('.asideMenu');
  const bodyScroll = document.querySelector('body');

  headerFeedbackButton.addEventListener ('click', () => {
    feedback.classList.toggle('feedback--active');
    siteContainer.classList.toggle('body--opacity');
    bodyScroll.classList.toggle('aside--active');
  });

  asideFeedbackButton.addEventListener ('click', () => {
    feedback.classList.toggle('feedback--active');
    aside.classList.toggle('aside--active');
    if (window.matchMedia('(min-width: 1366px)').matches) {
      siteContainer.classList.toggle('body--opacity');
      bodyScroll.classList.toggle('aside--active');
    };
  });

  feedbackCloseButton.addEventListener ('click', () => {
    feedback.classList.toggle('feedback--active');
    siteContainer.classList.toggle('body--opacity');
    bodyScroll.classList.toggle('aside--active');
  });

};

showFeedback();