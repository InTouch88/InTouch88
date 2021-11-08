  //Task 1
function runTask1() {
let newWindow = window.open('about:blank', 'hello', 'width=300, height = 300');
setTimeout(() => {
    newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
    newWindow.moveTo(200, 200);
}, 4000);
setTimeout(() => {
    newWindow.close();
}, 6000);
}

//Task 2
function changeCSS() {
    let elem = document.getElementById('text').style;
    elem.color = 'orange';
    elem.fontSize = 20;
    elem.fontFamily = "Comic Sans MS";
}

//Task 3
function makeThePageBlue() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'blue';
}
function makeThePagePink() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'pink';
}
function makeThePageBrown() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'brown';
}
function makeThePageWhite() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';
}
function makeThePageYellow() {
    let body = document.querySelector('body');
    body.style.backgroundColor = 'yellow';
}

//Task 4
function chooseAndDelete() {
    let names = document.querySelectorAll('select option');
    for (let i = 0; i < names.length; i++) {
         if (names[i].selected) {
             names[i].remove();
             return;
         }
    }
}

//Task 5
let elem = document.getElementById('live');

let addElem = function(text) {
    let p = document.createElement('p');
    p.innerHTML = text;
    elem.after(p);
};
elem.addEventListener("click", function() {
    addElem('I was pressed!');
});
elem.addEventListener("mouseover", function() {
    addElem('Mouse on me!');
});
elem.addEventListener("mouseout", function() {
    addElem('Mouse is not on me!');
});

//Task 6
window.addEventListener("resize", function() {
    let windowWidth = document.getElementById('width');
    windowWidth.innerHTML = window.outerWidth;
    let windowHeight = document.getElementById('height');
    windowHeight.innerHTML = window.outerHeight;
});

//Task 7

let germCities = ['Berlin', 'Hamburg', 'Munich'];
let usaCities = ['New York', 'Miami', 'LA'];
let ukrCities = ['Kyiv', 'Dnipro', 'Kharkiv'];

let country = document.getElementById('country');
let cities = document.getElementById('cities');
let span1 = document.getElementById("show-county");
let span2 = document.getElementById("show-city");

for (let i = 0; i < germCities.length; i++) {
    let opt = document.createElement('option');
    opt.value = germCities[i];
    opt.innerHTML = germCities[i];
    cities.append(opt);
}

function addRemoveOptions(city){
    let removeOptions = cities.querySelectorAll("option");
    
    for(let i = 0; i < removeOptions.length; i++){
    cities.removeChild(removeOptions[i]);
    };
    
    for(let i = 0;i < city.length; i++){
    let options = document.createElement("option");
    options.value = city[i];
    options.innerHTML = city[i];
    cities.append(options);
    };
};
    function showSpan() {
    span1.innerHTML = '';
    span2.innerHTML = '';
    span1.innerHTML = country.options[country.selectedIndex].text + ': ';
    span2.innerHTML = cities.value;
    }
    
    country.addEventListener("change", function() {
    let data = country.value;
    if (data == 'ger'){
    addRemoveOptions(germCities);
    showSpan();
    } else if (data == 'usa'){
    addRemoveOptions(usaCities);
    showSpan();
    } else if (data == 'ukr'){
    addRemoveOptions(ukrCities);
    showSpan();
    };
});
cities.addEventListener('change', function() {
    showSpan();
})
