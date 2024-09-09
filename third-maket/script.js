const elements = document.querySelectorAll('.menu__item');  
const showAllButton = document.querySelector('.showAll');  

let maxVisibleElements;  

function updateVisibleElements() {
  const screenWidth = window.innerWidth;  
  maxVisibleElements = screenWidth < 1119 ? 6 : 8;
  hideElements(); 
}

function hideElements() {  
  for (let i = 0; i < elements.length; i++) {  
    if (i >= maxVisibleElements) {  
      elements[i].classList.add('hidden');  
    } else {
      elements[i].classList.remove('hidden');
    }  
  }  
  showAllButton.textContent = 'Показать все';  
};  

function showElements() {
    if (showAllButton.textContent === 'Показать все') {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hidden');
      }
      showAllButton.textContent = 'Скрыть';
      showAllButton.classList.add('show-hidden');
    } else {
      for (let i = 0; i < elements.length; i++) {
        if (i >= maxVisibleElements) {
          elements[i].classList.add('hidden');
        }
      }
      showAllButton.textContent = 'Показать все';
      showAllButton.classList.remove('show-hidden');
    }
  }
  


  updateVisibleElements();
  window.addEventListener('resize', updateVisibleElements); 
  
  showAllButton.addEventListener('click', showElements); 