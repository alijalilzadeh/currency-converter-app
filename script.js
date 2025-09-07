const input = document.getElementById("currency-input");
const result = document.querySelector("#result");
const multiLang = document.querySelector(".multi-language");
const titleCurrency = document.querySelector(".currency-box h2");
const calculateButton = document.querySelector("#calculatebtn");
const fromText = document.querySelector("#FromText");
const toText = document.querySelector("#ToText");
const flag = document.querySelector(".flag");
const revertBtn = document.querySelector(".fa-repeat");

// let apiKey = "d4df8f0cb97d6501ff5a3d15";
// fetch(`https://v6.exchangerate-api.com/${apiKey}/latest/USD`)
// .then(response => response.json())
// .then(data => {
//   console.log(data);
// })



revertBtn.addEventListener("click", revertingCurrencies);
function revertingCurrencies() {
  revertBtn.classList.add("revert-i");
  setTimeout(() => {
    revertBtn.classList.remove("revert-i");
  }, 700);
  changingCurrencies();
}

function changingCurrencies() {
  const temp = selection1.value;
  selection1.value = selection2.value;
  selection2.value = temp;

  updateCurrencyFlag(selection1, "image-1");

  updateCurrencyFlag(selection2, "image-2");

  calculateCurrency();
}



const selection1 = document.getElementById("currency-option1");
const selection2 = document.getElementById("currency-option2");

function updateCurrencyFlag(selectionElement, flagClassName) {
  const oldFlag = selectionElement.nextElementSibling;

  if (oldFlag && oldFlag.classList.contains(flagClassName)) {
    oldFlag.remove();
  }

  if (selectionElement.value !== "Nan" && flagCodes[selectionElement.value]) {
    const newFlag = document.createElement("img");
    newFlag.className = flagClassName;
    newFlag.src = `https://hatscripts.github.io/circle-flags/flags/${flagCodes[selectionElement.value]}.svg`;

    selectionElement.parentElement.insertBefore(newFlag, selectionElement.nextSibling);
  }
}

selection1.addEventListener("change", () => {
  updateCurrencyFlag(selection1, "image-1");
});

selection2.addEventListener("change", () => {
  updateCurrencyFlag(selection2, "image-2");
});

input.addEventListener("keydown", pressEnter);
function pressEnter(e) {
  if (e.key === "Enter") {
    calculateCurrency();
    ShowErrorMessage();
    multiErrorMessage();
  }
}

function ShowErrorMessage() {
  if (multiLang.value === "Azerbaijan") {
    result.innerText = "	Zəhmət olmasa düzgün ədəd daxil edin";
  }
  if (multiLang.value === "Turkey") {
    result.innerText = "Lütfen geçerli bir sayı giriniz";
  }

  if (multiLang.value === "Russian") {
    result.innerText = "Пожалуйста, введите правильное число";
  }

  if (multiLang.value === "English") {
    result.innerText = "	Please enter a valid number";
  }
  result.style.color = "red";
}

multiLang.addEventListener("change", changeLanguage);
function changeLanguage() {
  result.innerText = "";
  input.style.border = "2px solid rgb(173, 165, 165)";
  input.value = "";
  if (multiLang.value === "Azerbaijan") {
    titleCurrency.innerText = "Valyuta Çevirici";
    calculateButton.innerText = "Hesabla";
    fromText.innerText = "Valyutanın tipi:";
    toText.innerText = "Çevrilən valyuta:";
    flag.className = "fi fi-az flag";
  }
  if (multiLang.value === "Turkey") {
    titleCurrency.innerText = "Döviz Çevirici";
    calculateButton.innerText = "Hesapla";
    fromText.innerText = " Başlangıç Birimi:";
    toText.innerText = "Hedef Birimi:";
    flag.className = "fi fi-tr flag";
  }
  if (multiLang.value === "Russian") {
    titleCurrency.innerText = "Конвертер валют";
    calculateButton.innerText = "Рассчитать";
    fromText.innerText = "Откуда:";
    toText.innerText = "Куда:";
    flag.className = "fi fi-ru flag";

  }
  if (multiLang.value === "English") {
    titleCurrency.innerText = "Currency Converter";
    calculateButton.innerText = "Calculate";
    fromText.innerText = "From";
    toText.innerText = "To:";
    flag.className = "fi fi-us flag";
  }
}

function showInputError() {
  const inputErrorMessage = {
    Azerbaijan: "Zəhmət olmasa bir dəyər daxil edin",
    Turkey: "Lütfen bir miktar girin",
    Russian: "Пожалуйста, введите сумму",
    English: "Please enter an amount"
  };
  if (selection1.selectedIndex != 0 && selection2.selectedIndex != 0) {
    result.innerText = inputErrorMessage[multiLang.value];
    result.style.color = "red";
  }
}

function showBothError() {
  const bothErrorMessage = {
    Azerbaijan: "Zəhmət olmasa valyutanı seçin və məbləği daxil edin",
    Turkey: "Lütfen para birimlerini seçin ve bir miktar girin",
    Russian: "Пожалуйста, выберите валюты и введите сумму",
    English: "Please select currencies and enter an amount"
  };
  if ((selection1.selectedIndex === 0 || selection2.selectedIndex === 0) && value1 === "") {
    result.innerText = bothErrorMessage[multiLang.value];
    result.style.color = "red";
  }
}

function multiErrorMessage() {
  const Message = {
    Azerbaijan: "Zəhmət olmasa valyutanı seçi",
    Turkey: "Lütfen bir para birimi seçin",
    Russian: "Пожалуйста, выберите валюту",
    English: "Please select a currency"
  };

  if (selection1.selectedIndex === 0 || selection2.selectedIndex === 0) {
    result.innerText = Message[multiLang.value];
    result.style.color = "red";
  }
}

calculateButton.addEventListener("click", calculateCurrency);
function calculateCurrency() {

  const value1 = parseFloat(input.value);
  let convertedCurrency;
  result.style.color = "black";

  if ((selection1.value === "Nan" || selection2.value === "Nan")) {
    multiErrorMessage();
  }
  if ((value1 >= 0) && (selection1.value != "Nan" && selection2.value != "Nan")) {
    let apiKey = "d4df8f0cb97d6501ff5a3d15";
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${selection1.value}`)
      .then(response => response.json())
      .then(data => {
        convertedCurrency = value1 * (data.conversion_rates[selection2.value]);
        console.log(convertedCurrency)
        result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value} `;
      })
      .catch(error => {
        console.error("Xəta baş verdi:", error);
      });
  }
  else if ((selection1.value === "Nan" || selection2.value === "Nan")) {
    multiErrorMessage();
  }
  else if (value1 < 0) {
    ShowErrorMessage();

  }
  else if ((selection1.value != "Nan" || selection1.value != "Nan") && value1 != "") {
    console.log("Hello");
    showInputError();
  }
  else if ((selection1.value === "Nan" || selection1.value === "Nan") && value1 === "") {
    console.log("Hello");
    showBothError();
  }
}
