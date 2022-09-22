// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
// const day = new Date().getDate();

// switch(day) {
//   case 0:
//     console.log("It's Sunday, time to relax!");
//     break;
//   case 1:
//     console.log("Happy Monday!");
//     break;
//   case 2:
//     console.log("It's Tuesday. You got this!");
//     break;
//   case 3:
//     console.log("Hump day alreaky!");
//     break;
//   case 4:
//     console.log("Just one more day 'til the weekend!");
//     break;
//   case 5:
//     console.log("Happy Friday!");
//     break;
//   case 6:
//     console.log("Have a wonderful Saturday!");
//     break;
//   default:
//     console.log("Something went horribly wrong...");
// }

// let x = 0;

// do {
//   // Increment variable by 1
//   x++;
//   console.log(x);
// } while(false);

function bold(strings, ...expressions) {
  let finalString = ''

  // Loop through all expressions
  expressions.forEach((value, i) => {
    finalString += `${strings[i]}<strong>${value}</strong>`
  })

  // Add the last string literal
  // finalString += strings[strings.length - 1]

  return finalString
}

const string = bold`This is a string with ${true} and ${false} and ${100} interpolated inside.`

console.log(string)