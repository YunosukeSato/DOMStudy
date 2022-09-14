// Set balance and price of item
const balance = 500;
const jeans = 40;

// Check if there are enough funds to purchase item
if(jeans <= balance) {
  console.log("You have enough money to purchase the item!");
}

// Set age of user
let age = 20;

// Place result of ternary operation in a variable
const oldEnough = (age >= 21) ? "You mau enter." : "You may not enter.";