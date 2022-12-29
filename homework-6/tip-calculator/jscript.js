////////--------------RIGHT CONTAINER------------------/////
const tipPrice = document.querySelector(".tip-price");
const totalPrice = document.querySelector(".total-price");
let resetBill = document.querySelector(".reset-btn");
////////--------------LEFT CONTAINER------------------/////
let billBtn = document.querySelector(".bill-input");
let numbOfPeople = document.querySelector(".person-input");
let customPercent = document.querySelector(".percentage-custom-block");
let buttonPercent = document.querySelectorAll(".percentage-block");
let cantZero = document.querySelector(".cantZero");
let formReset = document.querySelector("form");
///-------------------------SPLITING--------------------//////
function calcCustomPercent() {
  if (numbOfPeople.value == "") {
    cantZero.style.color = "red";
    numbOfPeople.style.borderColor = "red";
  } else if ((numbOfPeople.value !== "") & (billBtn.value == "") & (customPercent.value == "")) {
    totalPrice.innerHTML = "$0.00";
  } else if (customPercent.value !== "") {
    let calcCustomPercent = parseInt(customPercent.value);
    const tipPerPerson = (calcCustomPercent * parseInt(billBtn.value)) / 100 / parseInt(numbOfPeople.value);
    let totalPricePerson = parseInt(billBtn.value) / parseInt(numbOfPeople.value) + tipPerPerson;
    tipPrice.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePerson.toFixed(2);
    cantZero.style.color = "transparent";
    numbOfPeople.style.borderColor = "transparent";
    tipPerPerson.style.color = "hsl(172, 87%, 79%)";
  } else {
    const tipAmount = parseInt(billBtn.value) / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero.style.color = "transparent";
    numbOfPeople.style.borderColor = "transparent";
    tipPrice.style.color = "hsl(172, 87%, 79%)";
  }
}

function calcButtonPercents(percents) {
  if (numbOfPeople.value == "") {
    cantZero.style.color = "red";
    numbOfPeople.style.borderColor = "red";
  } else if (percents.target.value !== "") {
    let calcPercent = parseInt(percents.target.value);
    const tipPerPerson = (calcPercent * parseInt(billBtn.value)) / 100 / parseInt(numbOfPeople.value);
    let totalPricePersonOne = parseInt(billBtn.value) / parseInt(numbOfPeople.value) + tipPerPerson;
    tipPrice.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePersonOne.toFixed(2);
    cantZero.style.color = "transparent";
    numbOfPeople.style.borderColor = "transparent";
    tipPrice.style.color = "hsl(172, 87%, 79%)";
  } else {
    const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero.style.color = "transparent";
    tipPrice.style.color = "hsl(172, 87%, 79%)";
    numbOfPeople.style.borderColor = "hsl(172, 67%, 45%) solid thin";
  }
}
////////////-----------RESET BUTTON------------///////////////////////
function resetAll() {
  formReset.reset();
  cantZero.style.color = "transparent";
  numbOfPeople.style.borderColor = "transparent";
  tipPrice.style.color = "hsl(172, 67%, 45%)";
  resetBill.style.background = "hsl(186, 14%, 43%)";
  tipPrice.innerHTML = "$0.00";
  totalPrice.innerHTML = "$0.00";
}
////////////------------------ADD EVENT LISTENER--------------/////////////
addEventListener("change", (prevent) => {
  resetBill.style.background = "hsl(172, 67%, 45%)";
  prevent.preventDefault();
  calcCustomPercent();
});

buttonPercent.forEach((buttonClick) => {
  buttonClick.addEventListener("click", calcButtonPercents);
});

resetBill.addEventListener("click", () => {
  resetAll();
});
