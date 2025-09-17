//queation#1
// let a = 10;

//         document.write(`Result:<br>`);
//         document.write(`The value of a is: ${a}<br>`);
//         document.write(`......................................<br><br>`);

//         document.write(`The value of ++a is: ${++a}<br>`);
//         document.write(`Now the value of a is: ${a}<br><br>`);

//         document.write(`The value of a++ is: ${a++}<br>`);
//         document.write(`Now the value of a is: ${a}<br><br>`);

//         document.write(`The value of --a is: ${--a}<br>`);
//         document.write(`Now the value of a is: ${a}<br><br>`);

//         document.write(`The value of a-- is: ${a--}<br>`);
//         document.write(`Now the value of a is: ${a}<br>`);

// question#2
// let a = 2, b = 1;
//         document.write(`Initial values: a = ${a}, b = ${b}<br><br>`);

//         let step1 = --a; 
//         document.write(`Step 1 (--a): a = ${a}, value = ${step1}<br>`);

//         let step2 = step1 - --b; 
//         document.write(`Step 2 (--a - --b): a = ${a}, b = ${b}, value = ${step2}<br>`);

//         let step3 = step2 + ++b; 
//         document.write(`Step 3 (--a - --b + ++b): a = ${a}, b = ${b}, value = ${step3}<br>`);

//         let result = step3 + b--; 
//         document.write(`Step 4 (--a - --b + ++b + b--): a = ${a}, b = ${b}, result = ${result}<br><br>`);

//         document.write(`<b>Final Results:</b><br>`);
//         document.write(`a = ${a}<br>`);
//         document.write(`b = ${b}<br>`);
//         document.write(`result = ${result}<br>`);

// question#3
// let userName = prompt(`Please enter your name:`); 
// document.write(`Hello ${userName}, welcome to JavaScript!`);

// question#4
// let num = prompt(`Enter a number to show its multiplication table:`);

//         // Agar user kuch enter nahi kare toh default 5
//         if (num === "" || num === null) {
//             num = 5;
//         } else {
//             num = Number(num);
//         }

//         document.write(`<h2>Multiplication Table of ${num}</h2>`);

//         for (let i = 1; i <= 10; i++) {
//             document.write(`${num} x ${i} = ${num * i}<br>`);
//         }

// question#5
        // // a) Take 3 subject names
        // let sub1 = prompt(`Enter name of first subject:`);
        // let sub2 = prompt(`Enter name of second subject:`);
        // let sub3 = prompt(`Enter name of third subject:`);

        // // b) Total marks per subject
        // let totalMarksPerSubject = 100;

        // // c) Take obtained marks
        // let marks1 = Number(prompt(`Enter obtained marks for ${sub1}:`));
        // let marks2 = Number(prompt(`Enter obtained marks for ${sub2}:`));
        // let marks3 = Number(prompt(`Enter obtained marks for ${sub3}:`));

        // // d) Calculate total & percentage
        // let totalMarks = totalMarksPerSubject * 3;
        // let obtainedMarks = marks1 + marks2 + marks3;
        // let percentage = (obtainedMarks / totalMarks) * 100;

        // // e) Show result in table
        // document.write(`
        //     <table border="1" cellspacing="0" cellpadding="8">
        //         <tr>
        //             <th>Subject</th>
        //             <th>Total Marks</th>
        //             <th>Obtained Marks</th>
        //             <th>Percentage</th>
        //         </tr>
        //         <tr>
        //             <td>${sub1}</td>
        //             <td>${totalMarksPerSubject}</td>
        //             <td>${marks1}</td>
        //             <td>${(marks1 / totalMarksPerSubject) * 100}%</td>
        //         </tr>
        //         <tr>
        //             <td>${sub2}</td>
        //             <td>${totalMarksPerSubject}</td>
        //             <td>${marks2}</td>
        //             <td>${(marks2 / totalMarksPerSubject) * 100}%</td>
        //         </tr>
        //         <tr>
        //             <td>${sub3}</td>
        //             <td>${totalMarksPerSubject}</td>
        //             <td>${marks3}</td>
        //             <td>${(marks3 / totalMarksPerSubject) * 100}%</td>
        //         </tr>
        //         <tr>
        //             <th></th>
        //             <th>${totalMarks}</th>
        //             <th>${obtainedMarks}</th>
        //             <th>${percentage.toFixed(0)}%</th>
        //         </tr>
        //     </table>
        // `);


 