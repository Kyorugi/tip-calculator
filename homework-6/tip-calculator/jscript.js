// // /*--------------RIGHT CONTAINER----------------------*/

const tipPrice = document.querySelector(".tip-price");
const totalPrice = document.querySelector(".total-price");

/*--------------------------------------------------*/

const splitting = () => {
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
    // document.querySelector(".person-input").style.borderColor = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
  } else {
    const tipAmount = parseInt(billBtn.value) / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    // document.querySelector(".person-input").style.borderColor = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
  }
};

const activeResetButton = () => {
  let billBtn = document.querySelector(".bill-input");
  let numbOfPeople = document.querySelector(".person-input");
  let customPercentage = document.querySelector(".percentage-custom-block");
  if (numbOfPeople.value !== "" || billBtn.value !== "" || customPercentage.value !== "") {
    let resetNumbOfPeople = parseInt(numbOfPeople.value);
    resetNumbOfPeople = document.querySelector(".reset-btn").style.background = " hsl(172, 67%, 45%)";
    let resetBill = parseInt(billBtn.value);
    resetBill = document.querySelector(".reset-btn").style.background = " hsl(172, 67%, 45%)";
    let resetCustomPercentage = parseInt(customPercentage.value);
    resetCustomPercentage = document.querySelector(".reset-btn").style.background = " hsl(172, 67%, 45%)";
  } else {
    resetBill = document.querySelector(".reset-btn").style.background = "hsl(186, 14%, 43%)";
  }
};

let billBtn = document.querySelector(".bill-input");
billBtn.addEventListener("change", () => {
  activeResetButton();
});

let numbOfPeople = document.querySelector(".person-input");
numbOfPeople.addEventListener("change", () => {
  activeResetButton();
  splitting();
});

let customPercentage = document.querySelector(".percentage-custom-block");
customPercentage.addEventListener("change", () => {
  activeResetButton();
  splitting();
});

// function clearInputFields() {
//   document.querySelector(".bill-input").value = "";
//   document.querySelector(".percentage-custom-block").value = "";
//   document.querySelector(".person-input").value = "";
//   document.querySelector(".cantZero").style.color = "transparent";
//   const tipPrice = document.querySelector(".tip-price");
//   const totalPrice = document.querySelector(".total-price");
//   tipPrice.innerHTML = "$0.00";
//   totalPrice.innerHTML = "$0.00";
//   document.querySelector(".right-side-container").style.background = "hsl(183, 100%, 15%)";
//   document.querySelector(".person-input").style.border = "transparent";
//   document.querySelector(".tip-price").style.color = "hsl(172, 67%, 45%)";
// }

document.querySelector(".reset-btn").addEventListener("click", () => {
  location.reload();
  return false;
  //     clearInputFields();
  //   document.querySelector(".reset-btn").style.background = "hsl(186, 14%, 43%)";
});

const percentageOne = () => {
  let percentageOne = document.querySelector(".percentage-block1");
  let billBtn = parseInt(document.querySelector(".bill-input").value);
  let numbOfPeople = document.querySelector(".person-input");
  if (numbOfPeople.value == "") {
    document.querySelector(".cantZero").style.color = "red";
    document.querySelector(".person-input").style.borderColor = "red";
  } else if (percentageOne.value !== "" || percentageTwo.value !== "" || percentageThree.value !== "" || percentageFour.value !== "") {
    let calcPercentOne = parseInt(percentageOne.value);
    const tipPerPersonOne = (calcPercentOne * billBtn) / 100 / parseInt(numbOfPeople.value);
    let totalPricePersonOne = billBtn / parseInt(numbOfPeople.value) + tipPerPersonOne;
    tipPrice.innerHTML = "$" + tipPerPersonOne.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePersonOne.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
  } else {
    const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
    document.querySelector(".person-input").style.borderColor = "hsl(172, 67%, 45%) solid thin";
  }
};

const percentageTwo = () => {
  let percentageTwo = document.querySelector(".percentage-block2");
  let billBtn = parseInt(document.querySelector(".bill-input").value);
  let numbOfPeople = document.querySelector(".person-input");
  if (numbOfPeople.value == "") {
    document.querySelector(".cantZero").style.color = "red";
    document.querySelector(".person-input").style.borderColor = "red";
  } else if (percentageTwo.value !== "") {
    let calcPercentTwo = parseInt(percentageTwo.value);
    const tipPerPersonTwo = (calcPercentTwo * billBtn) / 100 / parseInt(numbOfPeople.value);
    let totalPricePersonTwo = billBtn / parseInt(numbOfPeople.value) + tipPerPersonTwo;
    tipPrice.innerHTML = "$" + tipPerPersonTwo.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePersonTwo.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
  } else {
    const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
    document.querySelector(".person-input").style.borderColor = "hsl(172, 67%, 45%) solid thin";
  }
};

const percentageThree = () => {
  let percentageThree = document.querySelector(".percentage-block3");
  let billBtn = parseInt(document.querySelector(".bill-input").value);
  let numbOfPeople = document.querySelector(".person-input");
  if (numbOfPeople.value == "") {
    document.querySelector(".cantZero").style.color = "red";
    document.querySelector(".person-input").style.borderColor = "red";
  } else if (percentageThree.value !== "") {
    let calcPercentThree = parseInt(percentageThree.value);
    const tipPerPersonThree = (calcPercentThree * billBtn) / 100 / parseInt(numbOfPeople.value);
    let totalPricePersonThree = billBtn / parseInt(numbOfPeople.value) + tipPerPersonThree;
    tipPrice.innerHTML = "$" + tipPerPersonThree.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePersonThree.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
  } else {
    const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
    document.querySelector(".person-input").style.borderColor = "hsl(172, 67%, 45%) solid thin";
  }
};

const percentageFour = () => {
  let percentageFour = document.querySelector(".percentage-block4");
  let billBtn = parseInt(document.querySelector(".bill-input").value);
  let numbOfPeople = document.querySelector(".person-input");
  if (numbOfPeople.value == "") {
    document.querySelector(".cantZero").style.color = "red";
    document.querySelector(".person-input").style.borderColor = "red";
  } else if (percentageFour.value !== "") {
    let calcPercentFour = parseInt(percentageFour.value);
    const tipPerPersonFour = (calcPercentFour * billBtn) / 100 / parseInt(numbOfPeople.value);
    let totalPricePersonFour = billBtn / parseInt(numbOfPeople.value) + tipPerPersonFour;
    tipPrice.innerHTML = "$" + tipPerPersonFour.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePersonFour.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
  } else {
    const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
    document.querySelector(".person-input").style.borderColor = "hsl(172, 67%, 45%) solid thin";
  }
};

const percentageFife = () => {
  let percentageFive = document.querySelector(".percentage-block5");
  let billBtn = parseInt(document.querySelector(".bill-input").value);
  let numbOfPeople = document.querySelector(".person-input");
  if (numbOfPeople.value == "") {
    document.querySelector(".cantZero").style.color = "red";
    document.querySelector(".person-input").style.borderColor = "red";
  } else if (percentageFive.value !== "") {
    let calcPercentFive = parseInt(percentageFive.value);
    const tipPerPersonFive = (calcPercentFive * billBtn) / 100 / parseInt(numbOfPeople.value);
    let totalPricePersonFive = billBtn / parseInt(numbOfPeople.value) + tipPerPersonFive;
    tipPrice.innerHTML = "$" + tipPerPersonFive.toFixed(2);
    totalPrice.innerHTML = "$" + totalPricePersonFive.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
  } else {
    const tipAmount = billBtn / parseInt(numbOfPeople.value).toFixed(2);
    totalPrice.innerHTML = "$" + tipAmount.toFixed(2);
    cantZero = document.querySelector(".cantZero").style.color = "transparent";
    document.querySelector(".tip-price").style.color = "hsl(172, 87%, 79%)";
    document.querySelector(".person-input").style.borderColor = "hsl(172, 67%, 45%) solid thin";
  }
};

document.querySelector(".percentage-block1").addEventListener("click", () => {
  percentageOne();
});

document.querySelector(".percentage-block2").addEventListener("click", () => {
  percentageTwo();
});

document.querySelector(".percentage-block3").addEventListener("click", () => {
  percentageThree();
});

document.querySelector(".percentage-block4").addEventListener("click", () => {
  percentageFour();
});

document.querySelector(".percentage-block5").addEventListener("click", () => {
  percentageFife();
});

// const splitting = () => {
//   let total = parseInt(document.querySelector("#total").value);
//   let people = parseInt(document.querySelector("#people").value);
//   let tipPercent = document.querySelector("#tipPercent");

//   if (tipPercent.value !== "") {
//     let calcPercent = parseInt(tipPercent.value);
//     const totalWithTip = total + (calcPercent * total) / 100;
//     document.querySelector("#perPerson").innerHTML = (totalWithTip / people).toFixed(2);
//   } else {
//     const result = total / people;
//     document.querySelector("#perPerson").innerHTML = result.toFixed(2);
//   }
// };

// const splitBtn = document.querySelector("#splitBtn");
// splitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   splitting();
// });
// document.querySelector("#resetBtn").addEventListener("click", (e) => {
//   e.preventDefault();
//   document.querySelector("form").reset();
//   document.querySelector("#perPerson").innerHTML = "0";
// });
