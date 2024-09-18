document.addEventListener('DOMContentLoaded', function() {
  const showAllButton = document.querySelector('.showAll');
  const toggleMenu = document.querySelector('.menuBox .swiper-wrapper');

  showAllButton.addEventListener('click', function() {
      if (toggleMenu.classList.contains('toggleVisibility')) {
          toggleMenu.classList.remove('toggleVisibility');
          showAllButton.textContent = 'Скрыть';
          showAllButton.classList.add('show-hidden');
      } else {
          toggleMenu.classList.add('toggleVisibility');
          showAllButton.textContent = 'Показать всё';
          showAllButton.classList.remove('show-hidden');
      }
  });
});