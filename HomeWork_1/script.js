//Task 2
function showMySurname() {
    console.log("Bzhezytskyi");
}
//Task3
let a = 10;
let b = 20;
function showVariables() {
    alert("Variable 1: " + a + '\n' + "Variable 2: " + b);
}
function copyVariables() {
    a = b;
}
function resetVariables() {
    a = 10;
}
//Task 4
let object = {
    "String": "I am a string",
    "Number": 10,
    "Boolean": true,
    "Undefined": undefined,
    "Null": null
}
function showCode() {
    let element = document.getElementById("task_4");
    if(element.style.display == 'none') {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
//Task 5
function askForAge() {
    let isAdault = confirm("Is your age 18+?");
    console.log(isAdault);
}
//Task 6
let name = 'Roman';
typeof(name);

let surname = 'Bzhezytskyi';
typeof(surname);

let bday = 1988;
typeof(bday);

let isSingle = true;
typeof(isSingle);

let group = 'TA';
typeof(group);

let random_1 = null;
let random_2 = undefined;

function showInConsole() {
    console.log(bday + ', ' + isSingle + ', ' + name + ', ' + group);
    console.log(random_1 + ', ' + random_2);
}

//Task 7
function askForCredentials() {
    let login = prompt('Enter your login:');
    let email = prompt('Enter your email:');
    let password = prompt('Enter the password:');
    alert('Dear ' + login + ', your email is ' + login + ', your password is ' + password);
}

//Task 8
let minute = 60;
let hour = 60 * minute;
let day = 24 * hour;
let month = day * 30;

function secondsAmount() {
    alert('Seconds amount in:' + '\n'
           + '1 hour: ' + hour + '\n'
           + '1 day: ' + day + '\n'
           + '1 month: ' + month + '\n');
}