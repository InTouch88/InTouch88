//Task 1

// let elem = document.getElementById('test');
// //elem.innerHTML = 'Second';
// let elem2 = document.querySelector('div');
// elem2.innerHTML = 'Third';

//Task 2

// let img = document.querySelector('img');
// img.src = 'cat.jpg';
// alert(img.outerHTML);

//Task 3

// let parags = document.querySelectorAll('#text p');
// for (let i = 0; i < parags.length; i++) {
//     console.log('Selector text ' + i + ': ' + parags[i].innerHTML);
// }

//Task 4

// let listElement1 = document.querySelector('#list li:first-child').innerHTML;
// let listElement5 = document.querySelector('#list li:last-child').innerHTML;
// let listElement2 = document.querySelector('#list li:nth-child(2)').innerHTML;
// let listElement4 = document.querySelector('#list li:nth-last-child(2)').innerHTML;
// let listElement3 = document.querySelector('#list li:nth-child(3)').innerHTML;
// alert(listElement1 + listElement5 + listElement2 + listElement4 + listElement3);

//Task 5

// let h1 = document.querySelector('body > h1');
// h1.style.backgroundColor = 'green';
// h1.style.display = 'inline-block';

// let p1 = document.querySelector('#myDiv p:first-child');
// p1.style.fontWeight = 800;

// let p2 = document.querySelector('#myDiv p:nth-child(2)');
// p2.style.color = 'red';

// let p3 = document.querySelector('#myDiv p:nth-child(3)');
// p3.style.textDecoration = 'underline';

// let p4 = document.querySelector('#myDiv p:nth-child(4)');
// p4.style.fontStyle = 'italic';

// let listElements = document.querySelectorAll('#myList li');
// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].style.display = 'inline';
//     listElements[i].style.listStyleType = 'none';
//     listElements[i].style.marginLeft = '-3px';
    
// }
// let span = document.querySelector('body > span');
// span.style.visibility = 'hidden';

//Task6

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

input1.value = prompt("Enter first value");
input2.value = prompt("Enter second value");
console.log(input1.value);
console.log(input2.value);

let box = input1.value;
input1.value = input2.value;
input2.value = box;
console.log(input1.value);
console.log(input2.value);