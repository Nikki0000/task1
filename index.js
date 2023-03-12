const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {


  var timer = setInterval(function () {
    var seconds = valueIn % 60;
    var minutes = (valueIn / 60) % 60;
    var hours = (valueIn / 60 / 60) % 60;
    if (valueIn < 0) {
      clearInterval(timer);
      //alert("Время вышло");
      timerEl.innerHTML = 'Время вышло';
    } else {
      let strTimer = `${Math.trunc(hours)} час : 
                      ${Math.trunc(minutes)} минут : 
                      ${seconds} секунд`;
      timerEl.innerHTML = strTimer;
    }
    --valueIn;
  }, 1000);
};

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  let valueIn = inputEl.value;
  let valueNum = Number(valueIn.replace(/[^0-9]/g, ""));
  inputEl.value = valueNum;
});



var click = true;

buttonEl.addEventListener("click", () => {
  if(click){
    createTimerAnimator();
    click = false;
  } else {
    clearInterval(timer);
    click = true;
  }

  valueIn = inputEl.value;
});
