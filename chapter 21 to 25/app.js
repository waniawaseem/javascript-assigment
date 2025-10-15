//question # 1
// // Take first name input from user
// let firstName=prompt(`Enter your first name:`)

// // Take last name input from user
// let lastName=prompt(`Enter your last name:`)

// // Merge both names into a new variable
// let fullName=(`${firstName} ${lastName}`)

// // Greet the user using full name
// alert(`Hello, ${fullName}! Welcome!`)

//question # 2
// // Take user input about favorite mobile phone model
// let favoritePhone = prompt(`Enter your favorite mobile phone model:`);

// // Display the input and its length in browser
// document.write("My favorite phone is: " + favoritePhone + "<br>");
// document.write(`Length of string: ${favoritePhone.length}`);

//question # 3
// // Store the word in a variable
// let word = "Hello World";

// // Find the last index of letter "l"
// let lastIndex = word.lastIndexOf("l");

// // Display the result in browser
// document.write("String: " + word + "<br>");
// document.write("Last index of 'l': " + lastIndex);

//question # 4
// // Store the word in a variable
// var word = "Pakistani";

// // Find the character at 3rd index
// var charAt3 = word.charAt(3);

// // Display the result in browser
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + charAt3);

//question # 5
// // Take first name input from user
// var firstName = prompt("Enter your first name:");

// // Take last name input from user
// var lastName = prompt("Enter your last name:");

// // Merge both names using concat() method
// var fullName = firstName.concat(" ", lastName);

// // Greet the user using full name
// document.write("Hello, " + fullName + "! Welcome!");

//question # 6
// Take first name input from user
// var firstName = prompt("Enter your first name:");

// // Take last name input from user
// var lastName = prompt("Enter your last name:");

// // Merge both names using concat() method
// var fullName = firstName.concat(" ", lastName);

// // Greet the user using full name
// document.write("Hello, " + fullName + "! Welcome!");

//question # 7
// // Store the word in a variable
// var city = "Hyderabad";

// // Replace "Hyder" with "Islam"
// var newCity = city.replace("Hyder", "Islam");

// // Display the result in browser
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

//question # 8
// let message = (`Ali and Sami are best friends. They play cricket and football together.`)
// // Replace all occurrences of "and" with "&"
// let newMessage =message.replace(/and/g,"&")
// document.write(newMessage)

//question # 9
// var str ="472"        // string value
// document.write(`Value: ${str}<br/>`)
// document.write(`Type: ${typeof(str)}<br/>`)

// // Convert string to number
// var num = parseInt(str)      // or you can use Number(str)
// document.write(`Value: ${num}<br/>`)
// document.write(`Type: ${typeof(num)}<br/>`)

//question # 10
// let userInput = prompt(`Enter any Text`);   // take input from user
// let capitalText = userInput.toUpperCase();  // convert to capital letters
// document.write(`User Input: ${userInput} <br/>`);
// document.write(`Upper Case: ${capitalText}`);

//question # 11
// var userInput=prompt('Please enter any word');
// var firstChar=userInput.slice(0,1);
// firstChar=firstChar.toUpperCase();
// var otherChars=userInput.slice(1);
// otherChars=otherChars.toLowerCase();
// var titleCase=firstChar+otherChars;
// document.write(`User Input :${userInput}<br>Title case :${titleCase} `);

//question # 12
// var num = 35.36;

// // Convert number to string
// var str = num.toString();

// // Remove the dot
// var result = str.replace(".", "");

// // Display the result
// document.write("Number: " + num + "<br>");
// document.write("Result: " + result); 

//question # 13
// var userInput=prompt('Enter your name: ');
// var charCode;
// for(var i=0;i<userInput.length;i++){
//     charCode=userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }
// }

//question # 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// userInput = userInput.toLowerCase(); // convert input to lowercase

// var index = items.indexOf(userInput); // find index of the item

// if (index !== -1) {
//   document.write(userInput + " is <b>available</b> at index " + index + " in our bakery");
// } else {
//   document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery");
// }

//question # 15
// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;

// //Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);

//     //Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

//     //Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

// //Checking for Numbers
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

// //Checking for first letter
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

// //Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }

//question # 16
// var str='University of Karachi';
// var arr =str.split("");
// for(var i=0;i<str.length;i++){
//     document.write(arr[i]+'<br>')
// }

//question # 17
// var userInput=prompt('Write any word');
// document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1])

//question # 18
// var str='The quick brown fox jumps over the lazy dog';
// str =str.toLowerCase();
// var count=str.match(/the/g);
// var length=count.length;
// document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"')
