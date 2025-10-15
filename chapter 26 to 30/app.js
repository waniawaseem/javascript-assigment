//question # 1
// // Take a positive integer input from user
// var num = +prompt("Enter a positive integer:");

// // Display results in browser
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num));

//question # 2
// // Take a negative floating-point number input from user
// let num = +prompt("Enter a negative floating point number:");

// // Display results in browser
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num));

//question # 3
// // Take a number input from user
// let num = +prompt("Enter a number:");

// // Find the absolute value
// let absoluteValue = Math.abs(num);

// // Display the result in browser
// document.write("The absolute value of " + num + " is " + absoluteValue);

//question # 4
// Generate a random number between 1 and 6
    // var diceValue = Math.floor(Math.random() * 6) + 1;

    // // Display the result in the browser
    // document.write("Random dice value: " + diceValue);

//question # 5
// let user1=prompt(`Enter 1st Player Name`);
// let user2=prompt(`Enter 2st Player Name`);
// let guess1=prompt(`Select any one Head or Tail?`);
// let guess2=prompt(`Select any one Head or Tail?`);
// let random=Math.round(Math.random());
// if (random===1 && guess1==="head"){
//     document.write("🎉 Congratulations! 1st Player Win");
// }
// else if (random===0 && guess1==="tail"){
//      document.write("🎉 Congratulations! 1st Player Win");
// }
// else {
//      document.write("🎉 Congratulations! 2nd Player Win");
// }
//question # 6
// Generate a random number between 1 and 100
    // var randomNumber = Math.floor(Math.random() * 100) + 1;

    // // Display the result in the browser
    // document.write("Random number between 1 and 100: " + randomNumber);

//question # 7
// // Ask the user for their weight
//     var userInput = prompt("Enter your weight :");

//     // Extract numeric value from the input using parseFloat()
//     var weight = parseFloat(userInput);

//     // Display the result in the browser
//     document.write("The weight of user is " + weight + " kilograms");

//question # 8
//  // Generate a random secret number between 1 and 10
//     var secretNumber = Math.floor(Math.random() * 10) + 1;

//     // Ask the user for their guess
//     var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

//     // Check if the guess is correct
//     if (userGuess === secretNumber) {
//       document.write("🎉 Congratulations! You guessed the secret number " + secretNumber + " correctly!");
//     } else {
//       document.write("❌ Sorry, the secret number was " + secretNumber + ". Try again!");
//     }