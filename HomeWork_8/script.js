//Task 1
// function upperCase(str) {
//     if (str[0].match(/[A-Z]/)) {
//         console.log('String is starts with uppercase character');
//     } else {
//         console.log('String is not starts with uppercase character');
//     }
// }
// let str1 = 'Hello';

//Task 2
// function checkEmail(email) {
// let regExp = /^\S{1,}@\S{1,}\.\w{2,3};
// let result = regExp.test(email);
// console.log(result);
// };
// checkEmail('hhk@bb.com');

//Task 3
function runTask3() {
    let heads = $('h2.head');
    for (let i = 0; i < heads.length; i++) {
        heads[i].style.backgroundColor = 'green';
    }
    let span = $('.head .inner');
    span.css('font-size', '35px');
}

//Task 4
let checkboxes = $('input[type=checkbox]');

let count = 0;
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
        if (this.checked) {
            count++;
            if (count > 2) {
                for (let j = 0; j < checkboxes.length; j++) {
                    checkboxes[j].setAttribute("disabled", "disabled");
                }
            }
        } else {
            count--;
            console.log(count);
        }
    });
}

//Task 5

function StringReplace() {
    let s='Java Script';
    let newStr = s.replace(/([A-Za-z]+)\s([A-Za-z]+)/, '$2, $1');
    alert(newStr);
}

//Task 6
function checkEmail(str){
    let regExp = /^[\w]\S+[-_]\S+@\w+\.\w{2,3}/;
    if (regExp.test(str)) {
        console.log(true);
    } else {
        console.log(false);;
    }
}
//checkEmail('my_mail@gmail.com');

//Task 7
function checkLogin(str) {
    let regExp = /^[A-Za-z][A-Za-z0-9\.]{1,9}$/g;
    let regExp2 = /[0-9]\.?[0-9]?/g;
    if (regExp.exec(str)) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(str.match(regExp2));
}
checkLogin('ee1*1ret3');