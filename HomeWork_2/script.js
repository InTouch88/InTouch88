//Task 1

let x = 1;
let y = 2;

function showRes1() {
let res1 = x.toString() + y.toString();
console.log(res1);
console.log(typeof(res1));
}

function showRes2 () {
let res2 = !!x + y.toString();
console.log(res2);
console.log(typeof(res2));
}

function showRes3() {
let res3 = x < y;
console.log(res3);
console.log(typeof(res3));
}

function showRes4() {
let res4 = parseInt(!!x + y.toString());
console.log(res4);
console.log(typeof(res4));
}

//Task 2

function checkNumber() {
let num = prompt('Введите число');
if (num % 2 == 0 && num % 7 == 0) {
    console.log('Парное число делится на 7');
} else if (num % 7 == 0) {
    console.log('Число делится на 7');
} else if (num % 2 == 0) {
    console.log('Число парное');
} else {
    console.log('Число не парное и на 7 не делится');
}
}

// //Task 3

function showArray() {
let array = [];
array[0] = 1;
array[1] = 'text';
array[2] = true;
array[3] = null;
alert(array.length);
array[4] = prompt('Enter the value');
alert(array[4]);
array.splice(0, 1);
alert(array);
}

//Task 4

function connectElements() {
let cities = ["Rome", "Lviv", "Warsaw"];
let result = cities.join('*');
alert(result);
}

//Task 5

function checkAge() {
let isAdult;
do {
    isAdult = prompt('How old are you?');
    if (isAdult === null || !parseInt(isAdult)) {
        alert('Enter a number');
    } else if (isAdult >= 18) {
        alert('You are old enough');
    } else if (isAdult < 18) {
        alert('You are too young');
    }
} while (!parseInt(isAdult) && isAdult);
}

//Task 6

function checkTriangle() {
let a;
let b;
let c;
do {
    a = prompt('Enter side A');
    if (a === null) {
        break;
    }
    if (!(parseInt(a) > 0)) {
        alert('Incorrect data');
    } else {
        do {
            b = prompt('Enter side B');
            if (b === null) {
                break;
            }
            if (!(parseInt(b) > 0)) {
                alert('Incorrect data');  
            } else {
                do {
                    c = prompt('Enter side C');
                    if (c === null) {
                        break;
                    }
                    if (!(parseInt(c) > 0)) {
                        alert('Incorrect data');
                    }
                } while (c !== null && !(parseInt(c) > 0));
            }
        } while (b !== null && !(parseInt(b) > 0));
    }
} while (a !== null && !(parseInt(a) > 0));
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
let p = (a + b + c)/2;
console.log('P ' + '= ' + p);

let doubleA = a * a;
let doubleB = b * b;
let doubleC = c * c;

let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
console.log('S ' + '= ' + s.toFixed(3));
if (doubleC === doubleA + doubleB) {
    console.log('Прямоугольный');
} else {
    console.log('Не прямоугольный');
}
}



//Task 7

let date = new Date();
let currentTime = date.getHours();

function ifElse() {
    if (currentTime >= 0 && currentTime < 5) {
        console.log('Good night');
    } else if (currentTime >= 5 && currentTime < 11) {
        console.log('Good morning');
    } else if (currentTime >= 11 && currentTime < 17) {
        console.log('Good afternoon');
    } else if (currentTime >= 17 && currentTime < 23) {
        console.log('Good evening');
    }
}

function sswitch() {
    switch(true) {
        case currentTime >= 0 && currentTime < 5:
            console.log('Good night');
            break;
        case currentTime >= 5 && currentTime < 11:
            console.log('Good morning');
            break;
        case currentTime >= 11 && currentTime < 17:
            console.log('Good afternoon');
            break;
        case currentTime >= 17 && currentTime < 23:
            console.log('Good evening');
            break;
    }
}

