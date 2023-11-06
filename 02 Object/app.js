document.write("<h1 style='text-align:center;text-decoration:underline'>OBJECTS</h1>");
document.write("<h2>DEFINITION :</h2>");
document.write("<p>Objects are one of JavaScript's data types.It is used to store key/values.</p>");

document.write("<h2>SYNTAX :</h2>");
document.write("<p style='font-weight:bold'>let obj = { name : 'ahsan', age : 20 } <br> document.write(obj); <br> OR <br> document.write(obj.name);</p>");

document.write("<h2>METHODS :</h2>");

document.write("<h4>1) To Creat Simple Objects.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console</p>");

// let obj = {                             // method 1 to make object
//     name: 'ahsan',
//     age: 20,
//     email: 'ahsan@gmail.com',
// };

// console.log(obj);
// console.log(obj.name); 


// let obj = new Object()                     // method 1 to make object

// obj.name = 'ahsan';
// obj.age = 20;
// obj.email = 'ahsan@gmail.com'

// console.log(obj)

document.write("<h4>2) To Call The Objects Property Name With different way.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     name: 'ahsan',
//     age: 20,
//     email: 'ahsan@gmail.com',
//     address: {
//         city: 'karachi',
//         area: 'gulberg'
//     }
// };

// console.log(obj);
// console.log(obj.name);                               // First way to call name of obj.
// console.log(obj['age']);                             // Second way to call age of obj.
// console.log(obj['address']);                         // Second way to call address of obj.
// console.log(obj.address['city']);                    // Second way to call city of obj.

document.write("<h4>3) To Freeze Objects so then nobody can change the property value And Add a New Property.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     name: 'ahsan',
//     age: 20,
//     email: 'ahsan@gmail.com',
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj.email);

// Object.freeze(obj);

// obj.name = 'umer'
// obj.address = 'karachi'

// console.log(obj);
// console.log(obj.name);

document.write("<h4>4) To Add Properties from outside of objects.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     name:'ahsan',
//     age:20,
//     email:'ahsan@gmail.com',
// };

// console.log(obj);
// obj.address = "karachi"
// console.log(obj);
// console.log(obj.address);

document.write("<h4>5) To Check The Existance Of The Properties In The Objects.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     name: 'ahsan',
//     age: 20,
//     email: 'ahsan@gmail.com',
// };
// console.log(obj);

// console.log('name' in obj)                  //true
// console.log('address' in obj)               //false

// console.log(obj.hasOwnProperty('name'))                  //true
// console.log(obj.hasOwnProperty('address'))               //false

document.write("<h4>6) To Call The Properties With For In Loop.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     name:"faraz",
//     age:21,
//     address:"karachi"
// }

// console.log(obj)

// for(let key in obj){
//     // console.log(key)
//     console.log(key+ ' : ' + obj[key])
//     // console.log(`${key} : ${obj[key]}`)
// }

document.write("<h4>7) To make a function From In Side Of Objects.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     fname: "faraz",
//     lname: "Alam",
//     age: 21,
//     address: {
//         city: "karachi",
//         area: "gulberg"
//     },
//     fullName : function() {
//         return this.fname + " " + this.lname;
//     }
// };

// console.log(obj);
// console.log(obj.fname);
// console.log(obj.lname);
// console.log(obj.age);
// console.log(obj.address);
// console.log(obj.address.city);
// console.log(obj.address.area);
// console.log(obj.fullName());

document.write("<h4>8) To make a function From Out Side Of Objects.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     fname: "faraz",
//     lname: "Alam",
//     age: 21,
//     address: {
//         city: "karachi",
//         area: "gulberg"
//     }
// };

// console.log(obj);
// console.log(obj.fname);
// console.log(obj.lname);
// console.log(obj.age);
// console.log(obj.address);
// console.log(obj.address.city);
// console.log(obj.address.area);

// obj.fullName = function() {
//     return this.fname + " " + this.lname;
// }
// console.log(obj);

// console.log(obj.fullName());

document.write("<h4>9) To Merge Different Objects Togather.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj1 = {
//     1: 'a',
//     2: 'b',
// };
// console.log(obj1);

// let obj2 = {
//     3: 'c',
//     4: 'd',
// };
// console.log(obj2);

// let obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

document.write("<h4>10) To Delete Any Property In Object.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     fname: "faraz",
//     lname: "Alam",
//     age: 21,
//     address: {
//         city: "karachi",
//         area: "gulberg"
//     }
// };
// console.log(obj);
// console.log(obj.address);

// delete obj.address;
// console.log(obj);
// console.log(obj.address);

document.write("<h4>11) To Print All The Values Of nested Objects With For In Loop  (Practise 01).</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let object = {
//     users1: {
//         user1: {
//             name: "faraz",
//             age: 21,
//             address: "karachi",
//         },
//         user2: {
//             name: "hamza",
//             age: 20,
//             address: "lahore",
//         },
//         user3: {
//             name: "salman",
//             age: 25,
//             address: "quetta",
//         },
//     },
//     users2: {
//         user4: {
//             name: "saqib",
//             age: 18,
//             address: "peshawar",
//         },
//     },
// };

// for (const key1 in object) {
//     console.log(key1)

//     for (const key2 in object[key1]) {
//         console.log(key2)

//         for (const key3 in object[key1][key2]) {
//             console.log(`${key3} : ${object[key1][key2][key3]}`)
//         }
//     }
// }

document.write("<h4>12) To Print All The Values Of nested Objects With Nested For In Loop (Practise 02).</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let data = {
//     sectionA: {
//         batch1: {
//             users1: {
//                 user1: {
//                     name: "faraz",
//                     age: 21,
//                     address: "karachi",
//                 },
//                 user2: {
//                     name: "hamza",
//                     age: 20,
//                     address: "lahore",
//                 },
//                 user3: {
//                     name: "salman",
//                     age: 25,
//                     address: "quetta",
//                 },
//             },
//         },
//     },
//     sectionB: {
//         batch2: {
//             users2: {
//                 user4: {
//                     name: "saqib",
//                     age: 18,
//                     address: "peshawar",
//                 },
//             },
//         },
//     },
// };

// for (const key1 in data) {
//     console.log(key1);

//     for (const key2 in data[key1]) {
//         console.log(key2);

//         for (const key3 in data[key1][key2]) {
//             console.log(key3);

//             for (const key4 in data[key1][key2][key3]) {
//                 console.log(key4);

//                 for (const key5 in data[key1][key2][key3][key4]) {
//                     console.log(key5,data[key1][key2][key3][key4][key5]);

//                 }
//             }
//         }
//     }
// };

document.write("<h4>13) To Print All The Values Of nested Objects With Nested For In Loop (Practise 03).</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let object = {
//     name: "faraz",
//     age: 21,
//     address: {
//         city: "karachi",
//         area: "gulberg"
//     },
//     subjects: [
//         'html', 'css', 'js'
//     ]
// }

// for (let key in object) {
//     if (typeof object[key] !== 'object') {
//         console.log(key, object[key]);
//     }

//     if (typeof object[key] === 'object') {
//         for (let key1 in object[key]) {
//             console.log(key1, object[key][key1]);
//         }
//     }
// }

document.write("<h4>14) To Make Object Constructor Function with Prototype Syntax.</h4>"); // on working
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// function Students(fname, lname, age, gender, email) {
//     this.firstName = fname;
//     this.lastName = lname;
//     this.stuAge = age;
//     this.stuGender = gender;
//     this.stuEmail = email;
// };

// let student1 = new Students('ahsan', 'manzar', 20, 'male', 'ahsan@gmail.com');

// console.log(student1);
// console.log(student1.firstName);

// Students.prototype.fullName = function () { return this.firstName + ' ' + this.lastName };  // function of prototype
// console.log(student1);
// console.log(student1.fullName());


document.write("<h4>15) To Make Object Constructor Function.</h4>");  //not done
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// function Students(fname, lname, age, gender, email) {    // the first letter of the function name must be in upper case because  we are making object constructer.
//     this.firstName = fname;                              // this.firstName is property name &&&&&  fname is property value.
//     this.lastName = lname;                               // the this keyword is used to target any value in the whole block of code where it is situated.
//     this.stuAge = age;
//     this.stuGender = gender;
//     this.stuEmail = email;
// };

// let student1 = new Students('ahsan', 'manzar', 20, 'male', 'ahsan@gmail.com');

// console.log(student1);
// console.log(student1.firstName);

// student1.firstName = 'hisham';  // to update a value of the firstName.
// console.log(student1.firstName);

// student1.address = 'karachi';   // to add a new property in student1.
// console.log(student1);
// console.log(student1.address);

// student1.subjects = ['html', 'css', 'js'];   // to add an array in student1.
// console.log(student1);
// console.log(student1.subjects);
// console.log(student1.subjects[0]);

// student1.subjects.push('react.js');   // we can use all the array methods here.
// console.log(student1.subjects);

document.write("<h4>16) To Make Object Constructor Function With Prototype.</h4>");           //not done
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// function Students(fname, lname, age, gender, email) {
//     this.firstName = fname;
//     this.lastName = lname;
//     this.stuAge = age;
//     this.stuGender = gender;
//     this.stuEmail = email;
// };

// let student1 = new Students('ahsan', 'manzar', 20, 'male', 'ahsan@gmail.com');

// console.log(student1);
// console.log(student1.stuAge);

// // Object.freeze(student1)

// Students.prototype.fullName = function () { return this.firstName + ' ' + this.lastName };  // function of prototype
// console.log(student1);
// console.log(student1.fullName());

// student1.firstName = 'hisham';

// console.log(student1);
// console.log(student1.fullName());

document.write("<h4>18) To Solve Single Nested Object.</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let data = {
//     name: "faraz",
//     age: 21,
//     address: {
//         city: "karachi",
//         area: "gulberg"
//     }
// };

// console.log(data);

// for (const key in data) {
//     console.log(key, data[key]);
//     if (typeof data[key] === 'object') {
//         for (const key1 in data[key]) {
//             console.log(key1, data[key][key1]);
//         }
//     }
// };

document.write("<h4>19) To print Objects with Objects methode(keys,values,entries).</h4>");
document.write("<p>To see the Question go to VS code.</p>");
document.write("<p>To see the Answer go to console.</p>");

// let obj = {
//     name: "faraz",
//     age: 21,
//     address: {
//         street: 'B1',
//         city: "karachi",
//         area: "gulberg"
//     }
// };

// console.log(Object.keys(obj));   // it prints only property names

// console.log(Object.values(obj));              // it prints only property values
// console.log(Object.values(obj.address));

// console.log(Object.entries(obj));    // it prints both the property names and values