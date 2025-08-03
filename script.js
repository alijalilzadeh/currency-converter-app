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

input.addEventListener("keydown",pressEnter);
function pressEnter(e){
  
  if(e.key === "Enter"){
    calculateCurrency();
  }

}



multiLang.addEventListener("change", function () {
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

});


calculateButton.addEventListener("click",calculateCurrency);

function calculateCurrency(){
  // console.log("Calculate button clicked");
  const value1 = parseFloat(input.value);
  let convertedCurrency;
  if(value1 >= 0){

    if (selection1.value === selection2.value) {
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
  else{
    result.innerText = "Please enter a valid number";
  }
}



// Another properties will be when you enter the click button it will calculate you don't need to press calculate button