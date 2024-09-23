document.addEventListener('DOMContentLoaded', function() {
  const showAllButton = document.querySelector('.typeSection__showAll');
  const toggleMenu = document.querySelector('.typeSection__menu');
  const showType = document.querySelector('.typeSection__showType');
  const hideType = document.querySelector('.typeSection__hideType');

  showAllButton.addEventListener('click', function() {
    showAllButton.classList.toggle('show-hidden');
    toggleMenu.classList.toggle('typeSection--hide');
    showType.classList.toggle('hiddenText');
    hideType.classList.toggle('hiddenText');
  });
});