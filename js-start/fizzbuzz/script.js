/*output the first 100 FizzBuzz numbers
The player designated to go first says the number "1", and the players then count upwards in turn. However, any number divisible by three is replaced by the word fizz and any number divisible by five by the word buzz. Numbers divisible by 15 become fizz buzz*/
"use strict";
/* for (let i = 1; i <= 100; i++) {
  switch (0) {
    case i % 15:
      console.log("fizz buzz");
      break;
    case i % 3:
      console.log("fizz");
      break;
    case i % 5:
      console.log("buzz");
      break;
    default:
      console.log(i);
  } 
}*/
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("fizz buzz");
    } else {
      console.log("fizz");
    }
  } else {
    if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
