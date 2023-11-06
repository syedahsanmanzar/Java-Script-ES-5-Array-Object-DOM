// // DOM Manipulation (creat element, creat text, creat attribute and its value ,styling)

// // to creat h1 tag with text
// let h1 = document.createElement("h1"); // creat tag
// let h1_text = document.createTextNode("React.JS"); // creat text
// h1.appendChild(h1_text); // it is used to put one tag  in another tag

// // to creat p tag with text
// let p = document.createElement('p');
// let p_text = document.createTextNode('React is a JavaScript library developed by Facebook. It aims to allow developers to create fast user interfaces for websites and applications alike easily.');
// p.appendChild(p_text)

// // to creat a tag with text and attribute
// let a = document.createElement('a');
// a.setAttribute('href','http://www.google.com');
// let a_text = document.createTextNode('Google');
// a.appendChild(a_text);

// document.getElementById('custom').appendChild(h1); // to put h1 tag into div tag
// document.getElementById('custom').appendChild(p);  // to put p tag into div tag
// document.getElementById('custom').appendChild(a);  // to put a tag into div tag

// // to style the document
// custom.style.backgroundColor = 'black';
// custom.style.padding = '20px';
// custom.style.color = 'gray';
// custom.style.textAlign = 'center';

// h1.style.textAlign = 'center';
// h1.style.textDecoration = 'underline';
// p.style.color = 'white';
// a.style.color = 'gray';


// // change image on mous over and out

//method 01
// function swapImage1() {
//     let image = document.getElementById('before');
//     image.src = 'image 02.jpeg'
// }

// function swapImage2() {
//     let image = document.getElementById('before');
//     image.src = 'image 01.jpeg'
// }

//method 02
// function changeImage(id, src) {
//   let image = document.getElementById(id)
//   image.src = src;
// }
