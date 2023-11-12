let currentInput = "";
let isResultShown = false;

function appendToDisplay(value) {
   if (isResultShown) {
      document.getElementById("display").value = "";
      isResultShown = false;
   }
   currentInput += value;
   document.getElementById("display").value= currentInput;
}

function clearDisplay() {
   currentInput = "";
   document.getElementById("display").value = "";
}

function calcResult() {
   try {
      const result = eval(currentInput);
      document.getElementById("display").value = result;
      isResultShown = true;
      currentInput = result.toString();
   }  catch (error) {
      document.getElementById("display").value = "Error";
   }
}

function deleteLast() {
   if (isResultShown) {
      clearDisplay();
   } else {
      currentInput = currentInput.slice(0, -1);
      document.getElementById("display").value =currentInput;
   }
}

function calcPercentage() {
   try {
      const percentage = eval(currentInput) / 100;
      document.getElementById("display").value= percentage;
      isResultShown = true;
      currentInput = percentage.toString();
   }  catch (error) {
      document.getElementById("display").value = "Error";
   }
}