document.write("<h1 style='text-align:center;text-decoration:underline'>ARRAYS</h1>");
document.write("<h2>DEFINITION :</h2>");
document.write("<p>An array is a special variable, which can hold more than one value.</p>");

document.write("<h2>SYNTAX :</h2>");
document.write("<p style='font-weight:bold'>let arr = [10, 20, 30] <br> document.write(arr); <br> OR <br> document.write(arr[0]);</p>");

document.write("<h2>METHODS :</h2>");

document.write("<h4>1) To Creat Simple Array.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

document.write("<h3>2) Use Of pop() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>The pop() method removes the last element from an Array.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);

// let pop = arr.pop();

// console.log(arr);

document.write("<h3>3) Use Of push() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>The push() method add a new element to an Array at the end.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);

// let push = arr.push(60);

// console.log(arr);

document.write("<h3>4) Use Of shift() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>The shift() method removes the first element from an Array at the beginning.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);

// let shift = arr.shift();

// console.log(arr);

document.write("<h3>5) Use Of unshift() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>The unshift() method adds a new element to an Array at the beginning.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = [10, 20, 30, 40, 50];

// console.log(arr);

// let unshift = arr.unshift(0);

// console.log(arr);

document.write("<h3>6) Use Of slice() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>* The slice() method alices out a piece of an Array into a new Array.<br>* It is use to copy the element from an Array to make a new Array.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(arr);

// // let slice = arr.slice(0,5);
// // let slice = arr.slice(5,arr.length);
// // let slice = arr.slice(4,6);

// console.log(slice);

document.write("<h3>7) Use Of splice() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>* The splice() method adds and/or removes array elements. <br>* The splice() method overwrites the original array.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let arr = ['syed', 'ahsan', 'manzar'];

// console.log(arr);

// // array.splice(index, howmany delete, new item1, ....., new itemX)
// let splice = arr.splice(1, 1, 'hisham');

// console.log(arr);

document.write("<h3>8) Use Of sort() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>* The sort() sorts the elements of an array. <br>* The sort() overwrites the original array.<br>* The sort() sorts the elements as strings in alphabetical and ascending order.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// sort() method with alphabet

// let arr = ['orange', 'apple', 'grapes', 'banana'];

// console.log(arr);

// let sort = arr.sort();

// console.log(sort);

// // // sort() method with numbers

// let arr = [40, 100, 1, 5, 25, 10];

// console.log(arr);

// // let sort = arr.sort(); // not working correctly
// let sort = arr.sort((a,b)=>{return a-b}); // not working correctly
// let sort = arr.sort((a,b)=>{return b-a}); // not working correctly

// console.log(sort);

document.write("<h3>9) Use Of reverse() Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>* The reverse() method reverses the order of the elements in an array. <br>* The reverse() method overwrites the original array.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);

// let reverse = fruits.reverse();

// console.log(reverse);

document.write("<h3>10) Use Of length Method In  Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p><b>* The length property sets or returns the number of elements in an array. <br>* It counts from 1not from 0.</b></p>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits);

// let length = fruits.length;  // it write the length of an array in numbers.

// console.log(length);

// fruits.length = 2;           // it write the name of the selected element of an array.

// console.log(fruits);

document.write("<h3>11) Use Of for loop In Array.</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

document.write("<h3>12) Use Of nested for loop In nested Array (method 1).</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let array = [10, 20, 30, 40, 50, [51, [52, 53, 54, 55], 56, [57], 58, 59], 60, 70, 80, 90, 100];

// console.log(array);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);

//     for (let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j]);

//         for (let k = 0; k < array[i][j].length; k++) {
//             console.log(array[i][j][k]);
//         }

//     }

// }

document.write("<h3>13) Use Of slice() method wiht Array (example # 01).</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let userInput = prompt("write your city?");

// let arr = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"];

// let firstChar = userInput.slice(0, 1).toUpperCase();

// let remainingChar = userInput.slice(1).toLowerCase();

// let updateInput = firstChar + remainingChar;

// let flag = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === updateInput) {
//     flag = true;
//     console.log("city found...");
//   }
// }

// if (flag === false) {
//   console.log("city not found...");
// }

document.write("<h3>14) Use Of slice() method wiht Array (example # 02).</h3>");
document.write("<h4>DEFINITION:-</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let str = "World War II The new Yourker Magazine does not alllow the phrase World War II";
// let str = "The new Yourker Magazine does not alllow the phrase World War II";
// console.log(str);

// // // // // // // // //   withe slice method

// for (let i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 12) === "World War II") {
//     str = str.slice(0, i) + "the Second World War";
//     console.log(str);
//   }
// }

// // // // // // // // // // //   withe replace method

// let replace = str.replace("World War II", "Second World War");
// let replace = str.replace(/World War II/g, "Second World War");

// console.log(replace);