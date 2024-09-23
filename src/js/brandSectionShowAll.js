export default function brandSectionShowAll() {

  document.addEventListener('DOMContentLoaded', function() {
    const showAllButton = document.querySelector('.brandSection__showAll');
    const toggleMenu = document.querySelector('.brandSection__menu');
    const showBrand = document.querySelector('.brandSection__showBrand');
    const hideBrand = document.querySelector('.brandSection__hideBrand');

    showAllButton.addEventListener('click', function() {
      showAllButton.classList.toggle('show-hidden');
      toggleMenu.classList.toggle('brandSection--hide');
      showBrand.classList.toggle('hiddenText');
      hideBrand.classList.toggle('hiddenText');
    });
  });

};

brandSectionShowAll();