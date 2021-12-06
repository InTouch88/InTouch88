// //Task 1
// function getPromise(message, delay) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(message), delay);
//     })
// }
// getPromise('hello', 2000).then(data => console.log(data));

//Task 2
// function calcArrProduct(arr) {
//     let result = 1;
//     return new Promise(function(resolve, reject) {
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof arr[i] === 'number') {
//                 result *= arr[i];
//             } else {
//                 return reject("Error! Incorrect array!");
//             }
//         }
//         resolve(result);
//     })
// }
// calcArrProduct([3,4,5]).then(function(result) {
//     console.log(result);
// })

//Task 3

const delay = function(i, time) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(i);
        }, time)
    })
}
// function showNumbers() {
//     for (let i = 0; i < 5; i++) {
//         let time = (Math.random() * 4)* 1000;
//             delay(i, time).then(function(i) {
//                     console.log(i);
//             })
//         }
//     }
// showNumbers();

//Task 4
// async function showNumbers() {
//     for (let i = 0; i < 5; i++) {
//         let time = (Math.random() * 4)* 1000;
//         await delay(i, time).then(function(i) {
//             console.log(i);
//         })
//         }
//     }
// showNumbers();
