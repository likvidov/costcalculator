const startButton = document.querySelector('.start-button'),
      firstScreen = document.querySelector('.first-screen'),
      mainForm = document.querySelector('.main-form'),
      formCalculate = document.querySelector('.form-calculate'),
      endButton = document.querySelector('.end-button'),
      totalElem = document.querySelector('.total'),
      fastRange = document.querySelector('.fast-range');


const showElem = (elem) => {
  elem.style.display = 'block';
};

const hideElem = (elem) => {
  elem.style.display = 'none';
};

const handlerCallBackForm = (event) => {
  const target = event.target;

  if(target.classList.contains('want-faster')) {
    target.checked ? showElem(fastRange) : hideElem(fastRange);
  }
};

startButton.addEventListener('click', () =>{
  hideElem(firstScreen);
  showElem(mainForm);
});

endButton.addEventListener('click', () => {
  for(const elem of formCalculate.elements){
    if(elem.tagName === 'FIELDSET') {
      hideElem(elem)
    }
  }

  showElem(totalElem)
})

formCalculate.addEventListener('change', handlerCallBackForm)