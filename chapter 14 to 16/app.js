//question # 1
//question # 2
//question # 3
//question # 4
//question # 5
//question # 6
//question # 7


//question # 8
// var studentsName=["Wania", "zoha", "haya"];
// var marks=[320, 230, 480];
// var totalMarks= 500;
// for (var i=0; i < studentsName.length; i++){
//     var percentage=(marks[i]/totalMarks)*100;
//     document.write(`Score of ${studentsName[i]} is ${marks[i]}. percentage: ${percentage}% <br/>`)
// }


//question # 9
// Initialize an array with color names
// var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];

// // Display initial array
// document.write(`Initial colors: ${colors}<br/>`);

// // a) Add color to the beginning
// var addBeginning = prompt(`Enter a color to add at the beginning:`)
// colors.unshift(addBeginning);
// document.write(`After adding to beginning:${colors}<br/>`)

// // b) Add color to the end
// var addEnd=prompt(`Enter a color to add at the end:`)
// colors.push(addEnd);
// document.write(`After adding to end:${colors}<br/>`)

// // c) Add two more colors to the beginning
// colors.unshift(`Purple, Pink`)
// document.write(`After adding two more colors to beginning:${colors}<br/>`)

// // d) Delete the first color
// colors.shift();
// document.write(`After deleting first color:${colors}<br/>`)

// // e) Delete the last color
// colors.pop();
// document.write(`After deleting last color:${colors}<br/>`)

// // f) Add color at a specific index
// var indexToAdd = +prompt("Enter the index to add a color:");
// var colorToAdd = prompt("Enter the color name to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// document.write(`After adding color at index ${indexToAdd}${colors}<br/>`);

// // g) Delete colors from a specific index
// var indexToDelete = +prompt("Enter the index to delete color(s):");
// var numToDelete = +prompt("Enter how many colors you want to delete:");
// colors.splice(indexToDelete, numToDelete);
// document.write(`After deleting  ${numToDelete} color(s) from index${indexToDelete}<br/>${colors}`);


// //question # 10
// //Store scores in an array
// var scores = [320, 230, 480, 120];

// // Display original array
// document.write("Scores of Students: " + scores + "<br>");

// // Sort array in ascending order
// scores.sort(function(a, b) {
//   return a - b;
// });

// // Display sorted array
// document.write("Ordered Scores of Students: " + scores);


// //question # 11
// // Step 1: Initialize array with city names
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// // Step 2: Copy 3 elements (for example: from index 1 to 3)
// var selectedCities = cities.slice(3, 4);

// // Step 3: Display arrays
// document.write("Cities list: " + cities + "<br>");
// document.write("Selected cities list: " + selectedCities);


//question # 12
// Step 1: Create array
// var arr = ["This ", " is ", " my ", " cat"];

// // Step 2: Use join method to combine array into string
// var sentence = arr.join("");

// // Step 3: Display result
// document.write("Array: " + arr + "<br>");
// document.write("String: " + sentence);


// //question # 13
// // Step 1: Create empty array
// var fifoArray = [];

// // Step 2: Add values one by one (enqueue)
// fifoArray.push("Keyboard");
// fifoArray.push("Mouse");
// fifoArray.push("Printer");
// fifoArray.push("Monitor");

// // Step 3: Display stored values
// document.write(`Devices:${fifoArray}<br/>`)

// // Step 4: Access values in FIFO order (dequeue)
// document.write(`Out: ${fifoArray.shift()}</br>`)
// document.write(`Out: ${fifoArray.shift()}</br>`)
// document.write(`Out: ${fifoArray.shift()}</br>`)
// document.write(`Out: ${fifoArray.shift()}</br>`)


//question # 14
// Step 1: Create empty array
// var lifoArray = [];

// // Step 2: Add values one by one (push)
// lifoArray.push("Keyboard");
// lifoArray.push("Mouse");
// lifoArray.push("Printer");
// lifoArray.push("Monitor");

// // Step 3: Display stored values
// document.write(`Devices:${lifoArray}<br/>`)

// // Step 4: Access values in lIFO order (dequeue)
// document.write(`Out: ${lifoArray.pop()}</br>`)
// document.write(`Out: ${lifoArray.pop()}</br>`)
// document.write(`Out: ${lifoArray.pop()}</br>`)
// document.write(`Out: ${lifoArray.pop()}</br>`)


//question # 15
// Step 1: Create array of manufacturers
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Step 2: Start dropdown
// document.write(`<select>`);

// // Step 3: Loop through array and create <option> for each manufacturer
// for (var i = 0; i < manufacturers.length; i++) {
//   document.write(`<option> ${manufacturers[i]} </option>`);
// }

// // Step 4: End dropdown
// document.write(`</select>`);
