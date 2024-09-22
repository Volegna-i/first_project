document.addEventListener('DOMContentLoaded', function() {
  const showAllButton = document.querySelector('.brandSection__showAll');
  const toggleMenu = document.querySelector('.brandSection__menuBox .swiper-wrapper');

  showAllButton.addEventListener('click', function() {
      if (toggleMenu.classList.contains('brandSection--hide')) {
          toggleMenu.classList.remove('brandSection--hide');
          showAllButton.textContent = 'Скрыть';
          showAllButton.classList.add('show-hidden');
      } else {
          toggleMenu.classList.add('brandSection--hide');
          showAllButton.textContent = 'Показать всё';
          showAllButton.classList.remove('show-hidden');
      }
  });
});