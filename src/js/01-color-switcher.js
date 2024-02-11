
// Select the button with data-start attribute
const startButton = document.querySelector('[data-start]');

// Select the button with data-stop attribute
const stopButton = document.querySelector('[data-stop]');
let intervalId;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


  function changeBackgroundColor(){
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }

  


startButton.addEventListener('click', () => {
  startButton.disabled = true;
    changeBackgroundColor();
    intervalId = setInterval(changeBackgroundColor, 1000);
});

stopButton.addEventListener('click', () => {

    clearInterval(intervalId)
    startButton.disabled = false;
})