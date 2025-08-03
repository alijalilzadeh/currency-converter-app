const input = document.getElementById("currency-input");
const selection1 = document.querySelector("#currency-option1");
const selection2 = document.querySelector("#currency-option2");
const result = document.querySelector("#result");



const calculateButton = document.querySelector("#calculatebtn").addEventListener("click", function(){
  // console.log("Calculate button clicked");
  const value1 = parseFloat(input.value);
  let convertedCurrency;
  if(selection1.value === "USD" && selection2.value === "AZN"){
      convertedCurrency = value1*1.7;
      result.innerText = `${value1} ${selection1.value} = ${convertedCurrency} ${selection2.value}`;
  }
    if(selection1.value === "AZN" && selection2.value === "USD"){
      convertedCurrency = value1/1.7;
      result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value}`;
  }
  if(selection1.value === "AZN" && selection2.value === "TRY"){
    convertedCurrency = value1*23.92;
    result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value} `;
  }
  if(selection1.value === "TRY" && selection2.value === "AZN"){
    convertedCurrency = value1/23.92;
    result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value} `;
  }
  
    if(selection1.value === "USD" && selection2.value === "TRY"){
    convertedCurrency = value1*40.65;
    result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value} `;
  }
    if(selection1.value === "TRY" && selection2.value === "USD"){
    convertedCurrency = value1/40.65;
    result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value} `;
  }
  
  
});



