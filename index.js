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

const addNum = appDiv.querySelector("button:nth-of-type(1)");
addNum.textContent = "Add Number";
addNum.className = "addNumBtn";

const sortNum = appDiv.querySelector("button:nth-of-type(2)");
sortNum.textContent = "Sort";
sortNum.className = "sortNumBtn";

const sortAll = appDiv.querySelector("button:nth-of-type(3)");
sortAll.textContent = "Sort All";
sortAll.className = "sortAllBtn";

const appInput = document.createElement("input");
appInput.style.border = "1px solid black";
appInput.className = "mainInput";
document.querySelector("#app").append(appInput);

// Inside parent #app, creates 3x Div with a H2 and an Input element
for (let i = 0; i < 3; i++) {
  const appDisplayDiv = document.createElement("div");
  const appDisplayH2 = document.createElement("h2");
  const appDisplayInput = document.createElement("Input");

  // just had to lookup how to add Class to elements this - hopefully i'll remember ;)
  appDisplayDiv.classList.add("divInputs");
  appDisplayDiv.style.border = "1px solid black";
  appDisplayDiv.style.backgroundColor = "lightgrey";
  appDisplayInput.style.backgroundColor = "lightgrey";

  document.querySelector("#app").appendChild(appDisplayDiv);
  appDisplayDiv.append(appDisplayH2);
  appDisplayDiv.append(appDisplayInput);
}

// I had this in the loop above for about 2 hours couldn't deterrmine why it wasn't working
const inputs = document.querySelectorAll(".divInputs");
inputs[0].querySelector("input").className = "bankInput";
inputs[1].querySelector("input").className = "oddInput";
inputs[2].querySelector("input").className = "evenInput";

// Inside each #app div element, Add text to each individual h2
document.querySelector("#app div:nth-of-type(2) h2").textContent = "Bank";
document.querySelector("#app div:nth-of-type(3) h2").textContent = "Odds";
document.querySelector("#app div:nth-of-type(4) h2").textContent = "Evens";

// BACKEND

const mainInput = document.querySelector(".mainInput");
const bankInput = document.querySelector(".bankInput");
const oddInput = document.querySelector(".oddInput");
const evenInput = document.querySelector(".evenInput");
const addNumBtn = document.querySelector(".addNumBtn");
const sortNumBtn = document.querySelector(".sortNumBtn");
const sortAllBtn = document.querySelector(".sortAllBtn");

//  When "addNumBtn" is clicked,
addNumBtn.addEventListener("click", () => {
  // and a Number in the "mainInput" field
  const getValue = mainInput.value;
  const storedBankValue = "";

  if (!isNaN(getValue)) {
    bankInput.value = getValue;
  } else {
    mainInput.style.border = "1px solid red";
  }
  storedBankValue.setItem("storeValue", bankInput.value);
});

// //  When "sortNumBtn" is clicked,
// addNumBtn.addEventListener("click", () => {
//   // Get the first Number in the "mainInput" field
//   const getValue = mainInput.value[0];
//   const storedEvenValue = "";
//   const storedOddValue = "";

//   if (!isNaN(value)) {
//     bankInput.value = value;
//   } else {
//     mainInput.style.border = "1px solid red";
//   }
//   storedBankValue.setItem("storeValue", bankInput.value);
// });
