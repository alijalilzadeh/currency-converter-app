const input = document.getElementById("currency-input");
const selection1 = document.querySelector("#currency-option1");
const selection2 = document.querySelector("#currency-option2");
const result = document.querySelector("#result");


const calculateButton = document.querySelector("#calculatebtn").addEventListener("click", function(){
  // console.log("Calculate button clicked");
  const value1 = parseFloat(input.value);
  let convertedCurrency;
  if(selection1.value === "Dollar" && selection2.value === "Manat"){
      convertedCurrency = value1*1.7;
      result.innerText = `${value1} ${selection1.value} = ${convertedCurrency} ${selection2.value}`;
  }
    if(selection1.value === "Manat" && selection2.value === "Dollar"){
      convertedCurrency = value1/1.7;
      result.innerText = `${value1} ${selection1.value} = ${convertedCurrency.toFixed(2)} ${selection2.value}`;
  }
 
 
});


