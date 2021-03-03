const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const revertBlack = document.getElementById('revertBLack');
const paragraph = document.querySelector('.paragraph');

const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');

myButton.addEventListener('click', () => {
    if (myHeading.style.color == myTextInput.value){
        myButton.textContent = 'change color';
        myHeading.style.color = 'black';
    }else {
        myButton.textContent = 'revert to black';
        myHeading.style.color = myTextInput.value;
    }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
});