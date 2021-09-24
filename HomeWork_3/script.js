//Task 1
function findSumFor() {
    let sum = 0;
    let arr = [2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
function findSumWhile() {
    let arr = [2, 3, 4, 5];
    let sum = 0;
    let count = arr.length;

    while (count > 0) {
        sum += arr[count - 1];
        count--;
    }
    console.log(sum);
}

//Task 2
function numberCheck() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 == 0) {
            console.log(i + ' is even');
        } else {
            console.log(i + ' is odd');
        }
    }
}

//Task 3 Math.random() * (b - a + 1) + a)
function randArray(k) {
   let arr = [];
   for (let i = 0; i < k; i++) {
       arr[i] = parseInt(Math.random() * 501);
   }
   console.log(arr);
}

//Task 4
function raiseToDegree(a, b) {
     a = +prompt('Enter a');
     b = +prompt('Enter b');
    let result = Math.pow(a, b);
    return result;
}
function showInConsole() {
    console.log(raiseToDegree(3, 4));
}

//Task 5
function findMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
       if (arguments[i] < min) {
           min = arguments[i];
       } 
    }
    console.log(min);
}

//Task 6
function findUnique(arr) {
    let isUnique;
    for (let i = 0; i < arr.length; i ++) {
        isUnique = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                isUnique = false;
                break;
            }
        }
        if (!isUnique) {
            break;
        }
    }
    console.log(isUnique);
}

//Task7 
function returnLastElement(arr, index) {
    if (index) {
        let count = 0;
        if (index > arr.length) {
            index = arr.length;
        }
        while (count < index) {
            console.log(arr[arr.length - 1 - count]);
            count++;
        }
    } else {
        console.log(arr[arr.length - 1]);
    }
}

//Task 8
function transformToUpper(s) {
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        if (i == 0) {
            newStr += s.charAt(0).toUpperCase(); 
        } else if (s.charAt(i - 1) == ' ') {
            newStr += s.charAt(i).toUpperCase();
        } else {
            newStr += s.charAt(i);
        }
    }
    console.log(newStr);
}