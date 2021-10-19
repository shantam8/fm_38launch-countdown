const dayInMs = 86400000;
const hourInMs = 3600000;
const minuteInMs = 60000;
const secondInMs = 1000;
const animationTimer = 200;

let daysTopBackCard = document.querySelector("#daysBox .topBackCard");
let daysTopFlipCard = document.querySelector("#daysBox .topFlipCard");
let daysBottomBackCard = document.querySelector("#daysBox .bottomBackCard");
let daysBottomFlipCard = document.querySelector("#daysBox .bottomFlipCard");

let hoursTopBackCard = document.querySelector("#hoursBox .topBackCard");
let hoursTopFlipCard = document.querySelector("#hoursBox .topFlipCard");
let hoursBottomBackCard = document.querySelector("#hoursBox .bottomBackCard");
let hoursBottomFlipCard = document.querySelector("#hoursBox .bottomFlipCard");

let minutesTopBackCard = document.querySelector("#minutesBox .topBackCard");
let minutesTopFlipCard = document.querySelector("#minutesBox .topFlipCard");
let minutesBottomBackCard = document.querySelector(
  "#minutesBox .bottomBackCard"
);
let minutesBottomFlipCard = document.querySelector(
  "#minutesBox .bottomFlipCard"
);

let secondsTopBackCard = document.querySelector("#secondsBox .topBackCard");
let secondsTopFlipCard = document.querySelector("#secondsBox .topFlipCard");
let secondsBottomBackCard = document.querySelector(
  "#secondsBox .bottomBackCard"
);
let secondsBottomFlipCard = document.querySelector(
  "#secondsBox .bottomFlipCard"
);

let dateDifferenceInMs;

let daysToTargetOld;
let hoursToTargetOld;
let minutesToTargetOld;
let secondsToTargetOld;

let daysToTarget;
let hoursToTarget;
let minutesToTarget;
let secondsToTarget;

let targetDate = new Date(2021, 10, 15, 20, 00);
let currentDate;

function handleTimer() {
  calculateTheTime();
  setNumbersOnDisplay();

  setInterval(() => {
    setOldNumberState();
    calculateTheTime();
    handleNumberChangedAnimation();
  }, 1000);
}

function calculateTheTime() {
  currentDate = new Date();
  dateDifferenceInMs = targetDate - currentDate;
  daysToTarget = Math.floor(dateDifferenceInMs / dayInMs);
  dateDifferenceInMs = dateDifferenceInMs % dayInMs;
  hoursToTarget = Math.floor(dateDifferenceInMs / hourInMs);
  dateDifferenceInMs = dateDifferenceInMs % hourInMs;
  minutesToTarget = Math.floor(dateDifferenceInMs / minuteInMs);
  dateDifferenceInMs = dateDifferenceInMs % minuteInMs;
  secondsToTarget = Math.floor(dateDifferenceInMs / secondInMs);
  addZeroDigitOnSmallNumber();
}

function addZeroDigitOnSmallNumber() {
  if (secondsToTarget < 10) {
    secondsToTarget = "0" + secondsToTarget;
  }
  if (minutesToTarget < 10) {
    minutesToTarget = "0" + minutesToTarget;
  }
  if (hoursToTarget < 10) {
    hoursToTarget = "0" + hoursToTarget;
  }
  if (daysToTarget < 10) {
    daysToTarget = "0" + daysToTarget;
  }
}

function setOldNumberState() {
  daysToTargetOld = daysToTarget;
  hoursToTargetOld = hoursToTarget;
  minutesToTargetOld = minutesToTarget;
  secondsToTargetOld = secondsToTarget;
}

function setNumbersOnDisplay() {
  daysTopBackCard.querySelector("h1").innerText = daysToTarget;
  daysBottomBackCard.querySelector("h1").innerText = daysToTarget;
  hoursTopBackCard.querySelector("h1").innerText = hoursToTarget;
  hoursBottomBackCard.querySelector("h1").innerText = hoursToTarget;
  minutesTopBackCard.querySelector("h1").innerText = minutesToTarget;
  minutesBottomBackCard.querySelector("h1").innerText = minutesToTarget;
  secondsTopBackCard.querySelector("h1").innerText = secondsToTarget;
  secondsBottomBackCard.querySelector("h1").innerText = secondsToTarget;
}

function handleNumberChangedAnimation() {
  if (secondsToTarget != secondsToTargetOld) {
    secondsTopFlipCard.querySelector("h1").innerText = secondsToTargetOld;
    secondsTopBackCard.querySelector("h1").innerText = secondsToTarget;
    secondsBottomFlipCard.querySelector("h1").innerText = secondsToTarget;
    secondsTopFlipCard.classList.add("flipTopCard");
    secondsBottomFlipCard.classList.add("flipBottomCard");

    setTimeout(() => {
      secondsBottomBackCard.querySelector("h1").innerText = secondsToTarget;
      secondsTopFlipCard.classList.remove("flipTopCard");
      secondsBottomFlipCard.classList.remove("flipBottomCard");
    }, animationTimer);
  }

  if (minutesToTarget != minutesToTargetOld) {
    minutesTopFlipCard.querySelector("h1").innerText = minutesToTargetOld;
    minutesTopBackCard.querySelector("h1").innerText = minutesToTarget;
    minutesBottomFlipCard.querySelector("h1").innerText = minutesToTarget;
    minutesTopFlipCard.classList.add("flipTopCard");
    minutesBottomFlipCard.classList.add("flipBottomCard");

    setTimeout(() => {
      minutesBottomBackCard.querySelector("h1").innerText = minutesToTarget;
      minutesTopFlipCard.classList.remove("flipTopCard");
      minutesBottomFlipCard.classList.remove("flipBottomCard");
    }, animationTimer);
  }

  if (hoursToTarget != hoursToTargetOld) {
    hoursTopFlipCard.querySelector("h1").innerText = hoursToTargetOld;
    hoursTopBackCard.querySelector("h1").innerText = hoursToTarget;
    hoursBottomFlipCard.querySelector("h1").innerText = hoursToTarget;
    hoursTopFlipCard.classList.add("flipTopCard");
    hoursBottomFlipCard.classList.add("flipBottomCard");

    setTimeout(() => {
      hoursBottomBackCard.querySelector("h1").innerText = hoursToTarget;
      hoursTopFlipCard.classList.remove("flipTopCard");
      hoursBottomFlipCard.classList.remove("flipBottomCard");
    }, animationTimer);
  }

  if (daysToTarget != daysToTargetOld) {
    daysTopFlipCard.querySelector("h1").innerText = daysToTargetOld;
    daysTopBackCard.querySelector("h1").innerText = daysToTarget;
    daysBottomFlipCard.querySelector("h1").innerText = daysToTarget;
    daysTopFlipCard.classList.add("flipTopCard");
    daysBottomFlipCard.classList.add("flipBottomCard");

    setTimeout(() => {
      daysBottomBackCard.querySelector("h1").innerText = daysToTarget;
      daysTopFlipCard.classList.remove("flipTopCard");
      daysBottomFlipCard.classList.remove("flipBottomCard");
    }, animationTimer);
  }
}

function init() {
  handleTimer();
}

window.onload = init;
