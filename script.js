const elements = document.querySelectorAll('.menu__item');  
const showAllButton = document.querySelector('.showAll');  

let maxVisibleElements;  

function updateVisibleElements() {
  const screenWidth = window.innerWidth;  
  maxVisibleElements = screenWidth < 1119 ? 6 : 8;
  hideElements(); 
}

function hideElements() {  
  for (let elem = 0; elem < elements.length; elem++) {  
    if (elem >= maxVisibleElements) {  
      elements[elem].classList.add('hidden');  
    } else {
      elements[elem].classList.remove('hidden');
    }  
  }  
  showAllButton.textContent = 'Показать все';  
};  

function showElements() {
    if (showAllButton.textContent === 'Показать все') {
      for (let elem = 0; elem < elements.length; elem++) {
        elements[elem].classList.remove('hidden');
      }
      showAllButton.textContent = 'Скрыть';
      showAllButton.classList.add('show-hidden');
    } else {
      for (let elem = 0; elem < elements.length; elem++) {
        if (elem >= maxVisibleElements) {
          elements[elem].classList.add('hidden');
        }
      }
      showAllButton.textContent = 'Показать все';
      showAllButton.classList.remove('show-hidden');
    }
  }
  


  updateVisibleElements();
  window.addEventListener('resize', updateVisibleElements); 
  
  showAllButton.addEventListener('click', showElements); 