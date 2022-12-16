////////--------------RIGHT CONTAINER------------------/////
const tipPrice = document.querySelector(".tip-price");
const totalPrice = document.querySelector(".total-price");
///-------------------------SPLITING--------------------//////
const splittingCustom = () => {
  let billBtn = document.querySelector(".bill-input");
  let numbOfPeople = document.querySelector(".person-input");
  let customPercentage = document.querySelector(".percentage-custom-block");
  if (numbOfPeople.value == "") {
    document.querySelector(".cantZero").style.color = "red";
    document.querySelector(".person-input").style.borderColor = "red";
  } else if ((numbOfPeople.value !== "") & (billBtn.value == "") & (customPercentage.value == "")) {
    totalPrice.innerHTML = "$0.00";
  } else if (customPercentage.value !== "") {
    let calcCustomPercent = parseInt(customPercentage.value);
    const tipPerPerson = (calcCustomPercent * parseInt(billBtn.value)) / 100 / parseInt(numbOfPeople.value);
    let totalPricePerson = parseInt(billBtn.value) / parseInt(numbOfPeople.value) + tipPerPerson;
    tipPrice.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePerson.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".person-input").style.borderColor = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
  } else {
    const tipAmount = parseInt(billBtn.value) / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".person-input").style.borderColor = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
  }
};

let splittingPercent = document.querySelectorAll(".percentage-block");
splittingPercent.forEach((percentage) => {
  percentage.addEventListener("click", () => {
    let billBtn = parseInt(document.querySelector(".bill-input").value);
    let numbOfPeople = document.querySelector(".person-input");
    if (numbOfPeople.value == "") {
      document.querySelector(".cantZero").style.color = "red";
      document.querySelector(".person-input").style.borderColor = "red";
    } else if (percentage.value !== "") {
      let calcPercentOne = parseInt(percentage.value);
      const tipPerPersonOne = (calcPercentOne * billBtn) / 100 / parseInt(numbOfPeople.value);
      let totalPricePersonOne = billBtn / parseInt(numbOfPeople.value) + tipPerPersonOne;
      tipPrice.innerHTML = "$" + tipPerPersonOne.toFixed(2);
      totalPrice.innerHTML = "$" + totalPricePersonOne.toFixed(2);
      cantZero = document.querySelector(".cantZero").style.color = "transparent";
      document.querySelector(".person-input").style.borderColor = "transparent";
      document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
    } else {
      const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
      totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
      cantZero = document.querySelector(".cantZero").style.color = "transparent";
      document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
      document.querySelector(".person-input").style.borderColor = "hsl(172, 67%, 45%) solid thin";
    }
  });
});
////////////-----------RESET BUTTON------------///////////////////////
document.querySelector(".reset-btn").addEventListener("click", () => {
  document.querySelector("form").reset();
  cantZero = document.querySelector(".cantZero").style.color = "transparent";
  document.querySelector(".person-input").style.borderColor = "transparent";
  document.querySelector(".tip-price").style.color = "hsl(172, 67%, 45%)";
  resetBill = document.querySelector(".reset-btn").style.background = "hsl(186, 14%, 43%)";
  tipPrice.innerHTML = "$0.00";
  totalPrice.innerHTML = "$0.00";
});
////////////------------------ADD EVENT LISTENER--------------/////////////////////////////

document.querySelector(".bill-input");
addEventListener("change", () => {
  resetBill = document.querySelector(".reset-btn").style.background = "hsl(172, 67%, 45%)";
});

document.querySelector(".person-input");
addEventListener("change", () => {
  resetBill = document.querySelector(".reset-btn").style.background = "hsl(172, 67%, 45%)";
  splittingCustom();
});

document.querySelector(".percentage-custom-block");
addEventListener("change", (prevent) => {
  resetBill = document.querySelector(".reset-btn").style.background = "hsl(172, 67%, 45%)";
  prevent.preventDefault();
  splittingCustom();
});
