document.addEventListener('DOMContentLoaded', function() {
  const showAllButton = document.querySelector('.typeSection__showAll');
  const toggleMenu = document.querySelector('.typeSection__menuBox .swiper-wrapper');

  showAllButton.addEventListener('click', function() {
      if (toggleMenu.classList.contains('typeSection--hide')) {
          toggleMenu.classList.remove('typeSection--hide');
          showAllButton.textContent = 'Скрыть';
          showAllButton.classList.add('show-hidden');
      } else {
          toggleMenu.classList.add('typeSection--hide');
          showAllButton.textContent = 'Показать всё';
          showAllButton.classList.remove('show-hidden');
      }
  });
});