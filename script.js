const input = document.getElementById("currency-input");
const selection1 = document.querySelector("#currency-option1");
const selection2 = document.querySelector("#currency-option2");
const result = document.querySelector("#result");
const multiLang = document.querySelector(".multi-language");
const titleCurrency = document.querySelector(".currency-box h2");
const calculateButton = document.querySelector("#calculatebtn");
const fromText = document.querySelector("#FromText");
const toText = document.querySelector("#ToText");
const flag = document.querySelector(".flag");

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

    
function showBothError(){
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


  if ((selection1.value === "Nan" || selection2.value === "Nan")  ) {
    multiErrorMessage();
  }
  if ((value1 >= 0) && (selection1.value != "Nan" && selection2.value != "Nan")) {
    if ((selection1.value === selection2.value)) {
      result.innerText = `${value1} ${selection1.value} = ${value1} ${selection2.value}`;
      return;
    };

    if (selection1.value === "USD" && selection2.value === "AZN") {
      convertedCurrency = (value1 * 1.7).toFixed(2);

    }
    if (selection1.value === "AZN" && selection2.value === "USD") {
      convertedCurrency = (value1 / 1.7).toFixed(2);
    }
    if (selection1.value === "AZN" && selection2.value === "TRY") {
      convertedCurrency = (value1 * 23.92).toFixed(2);
    }
    if (selection1.value === "TRY" && selection2.value === "AZN") {
      convertedCurrency = (value1 / 23.92).toFixed(2);
    }

    if (selection1.value === "USD" && selection2.value === "TRY") {
      convertedCurrency = (value1 * 40.65).toFixed(2);
    }
    if (selection1.value === "TRY" && selection2.value === "USD") {
      convertedCurrency = (value1 / 40.65).toFixed(2);
    }

    result.innerText = `${value1} ${selection1.value} = ${convertedCurrency} ${selection2.value} `;
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
// Another properties will be when you enter the click button it will calculate you don't need to press calculate button