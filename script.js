const allButtonsElm = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");

const opreators = ["%", "/", "*", "-", "+"];

let lastOperator = "";

//Load the audio

const audio = new Audio("./assets/aa.wav");

const buttonAction = (value) => {
  displayElm.classList.remove("prank");

  if (value === "AC") {
    strToDisplay = "";
    return display(strToDisplay);
  }

  if(value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    return display(strToDisplay);
  }

  if (value === "=" || value === "Enter") {
    lastOperator = ""
    //get the last char
    const lastChar = strToDisplay[strToDisplay.length - 1];

    // check if it is the one of the opreators
    if(opreators.includes(lastChar)){
        strToDisplay = strToDisplay.slice(0, -1);
    }

    return displayTotal();
  }

  //show only last clicked operator
  if (opreators.includes(value)) {
    lastOperator = value
    //get the last char
    const lastChar = strToDisplay[strToDisplay.length - 1];
    
    if (opreators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1)
    }
  }

  //handle the dot click

  if(value === ".") {
    const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);

    const lastNumberSet = strToDisplay.slice(lastOperatorIndex);

    if(lastNumberSet.includes(".")){
      return; 
    }

    if(!lastOperator && strToDisplay.includes(".")) {
        return;
    }
  }

  strToDisplay += value;

  display(strToDisplay);
};

//attache click event to all the buttons
allButtonsElm.forEach((btn) => {
  btn.addEventListener("mousedown",()=>{
    btn.style.scale = ".9";
  })

  btn.addEventListener("click", () => {
    btn.style.scale = "1";
    const value = btn.innerText;
    buttonAction(value);
  });
});

//update clicked button value to display area
const display = (str) => {
  displayElm.innerText = str || "0.0";
};

//calculate total
const displayTotal = () => {
  const extraValue = randomValue();      // Calling prank value
  if(extraValue) {
    displayElm.classList.add("prank");
    audio.play();
  }

  const total = eval(strToDisplay)+ extraValue; // (pranking part) if random value pass less than 3 value pranks happen

  strToDisplay = total.toString();
  display(strToDisplay);
};


//Pranking part

const randomValue = () => {
  const num = Math.round(Math.random() * 10);   // Generates a number between 0-10

  return num < 4 ? num : 0;       // Returns the prank value if it's less than 4
}

// Binding Keyword with browser app 
document.addEventListener("keypress", (e)=>{
  console.log(e);
  const value = e.key;
  if(e.code.includes("Key")) {
    return;
  }
  buttonAction(value);
})