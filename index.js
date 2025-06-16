const appElement = document.querySelector("#app"); // Cache #app

// UI DESIGN
// create the headers, inputs, and, buttons
const appH1 = document.createElement("h1");
appH1.textContent = "Odds & Events";
document.querySelector("#app").append(appH1);

const appDiv = document.createElement("div");
appDiv.classList.add("subheader");
document.querySelector("#app").append(appDiv);

const appP = document.createElement("p");
appP.textContent = "Add number to input below. Buttons:";
appDiv.append(appP);

// Create 3x Buttons
for (let i = 0; i < 3; i++) {
  const appButton = document.createElement("button");
  appButton.style.backgroundColor = "grey";
  appButton.style.color = "lightgrey";
  appDiv.append(appButton);
}

// Gives each Button a Class and Title
const addNum = appDiv.querySelector("button:nth-of-type(1)");
addNum.textContent = "Add Number";
addNum.className = "addNumBtn";

const sortNum = appDiv.querySelector("button:nth-of-type(2)");
sortNum.textContent = "Sort";
sortNum.className = "sortNumBtn";

const sortAll = appDiv.querySelector("button:nth-of-type(3)");
sortAll.textContent = "Sort All";
sortAll.className = "sortAllBtn";

// Creates mainInput
const appInput = document.createElement("input");
appInput.style.border = "1px solid black";
appInput.className = "mainInput";
document.querySelector("#app").append(appInput);

// Creates a Bank, Odds, and Even Arry
let bankTitles = ["Bank", "Odds", "Evens"];

// Inside parent #App, creates 3x DIV with a H2 and an Input element
for (let i = 0; i < 3; i++) {
  // console.log("Inside Loop");
  const appDisplayDiv = document.createElement("div"); // Basic div for each bank
  appDisplayDiv.classList.add("divInputs");
  appDisplayDiv.style.border = "1px solid black";
  appDisplayDiv.style.backgroundColor = "lightgrey";

  // Created DIV and H2 structure
  appDisplayDiv.innerHTML = `
    <h2>${bankTitles[i]}</h2>
    <div style="background-color: lightgrey;"></div>
  `;

  appElement.appendChild(appDisplayDiv);

  // Setup INPUT Id or className directly.
  const bankContainer = appDisplayDiv.querySelector("div");
  bankContainer.id = bankTitles[i] + "Container";
}

// BACKEND

const mainInput = document.querySelector(".mainInput"); // Selector
const bankInput = document.getElementById("bankInput");
const oddInput = document.getElementById(".oddInput");
const evenInput = document.getElementById(".evenInput");

// TODO:  Empty these arrays at the end.
// This will store the value
const storedBankValues = [2, 3, 44, 23, 5];
const resetValue = [];

// Defines "addNumBtn"
const addNumBtn = document.querySelector(".addNumBtn");

//  When "addNumBtn" is clicked,
addNumBtn.addEventListener("click", () => {
  // TODO: What happens if the mainInput is not a number?
  // If mainInput new value is NaN
  if (isNaN(mainInput.value)) {
    // Warn user of error with red mainInput border
    mainInput.style.border = "1px solid red";
    alert(`You didn't enter a Number`);
  } else {
    // If it is a Number, move new value to Bank
    const getValue = Number(mainInput.value); // Raw dom data is always a string to begin with
    storedBankValues.push(getValue);
  }
  // TODO: whenever you click addNumBtn, clear the div first before rendering the contents.
  // reset mainInput into empty Arry
  mainInput.value = resetValue;

  // Clear the div of its contents before rendering, so that you dont get duplicates.
  let bankContainer = document.getElementById("BankContainer");
  bankContainer.textContent = "";

  // Adds space between Numbers
  for (let i = 0; i < storedBankValues.length; i++) {
    bankContainer.textContent += ", " + storedBankValues[i];
    console.log(bankContainer.textContent);
  }
});

// Defines "sortAllBtn"
const sortAllBtn = document.querySelector(".sortAllBtn");

// When "sortAllBtn" is clicked,
sortAllBtn.addEventListener("click", () => {
  // TODO: Clear the containers for even and odd before rendering the numbers, to prevent duplicates.

  let EvensContainer = document.getElementById("EvensContainer");
  EvensContainer.textContent = "";

  let OddsContainer = document.getElementById("OddsContainer");
  OddsContainer.textContent = "";

  // Defines mainInput
  const getValue = mainInput.value;
  // we need to create a loop of each arry number
  for (let i = 0; i < storedBankValues.length; i++) {
    // Modulo works by giving the remainder of whatever numbers. example 3 % 2, the remainder is 1 ; there it is odd.
    // You know a number is even, because it will result in a 0

    // If the number is even,
    if (storedBankValues[i] % 2 === 0) {
      // put in even container
      EvensContainer.textContent += " " + storedBankValues[i];
      // Otherwise, put in the odd container
    } else {
      OddsContainer.textContent += " " + storedBankValues[i];
    }
  }
  getValue = resetValue;
});

// Defines "sortNumBtn"
const sortNumBtn = document.querySelector(".sortNumBtn");

// When "sortNumBtn" is clicked,
sortNumBtn.addEventListener("click", () => {
  // Reset Containers
  let EvensContainer = document.getElementById("EvensContainer");
  EvensContainer.textContent = "";

  let OddsContainer = document.getElementById("OddsContainer");
  OddsContainer.textContent = "";

  // Defines mainInput
  const getValue = mainInput.value;
  console.log(getValue);
  // If the number is even,
  if (storedBankValues[0] % 2 === 0) {
    // put in even container
    EvensContainer.textContent = storedBankValues[0];
  } else {
    // Otherwise, put in the odds container
    OddsContainer.textContent = storedBankValues[0];
  }
});
