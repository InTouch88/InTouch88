//Task 1
function runTask1() {
    let arr = ["Tom", "Sam", "Ray", "Bob"];
let[x, y, , z] = arr;
console.log(x);
console.log(y);
console.log(z);
};

//Task 2
function runTask2() {
    let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
     };
     let [, name2, , name4] = data.names;
     let [, age2, , age4] = data.ages;
     console.log(name2);
     console.log(age2);
     console.log(name4);
     console.log(age4);
}

//Task 3
function mul(...rest) {
    let result = 1;
    for (let i = 0; i < rest.length; i++) {
        if (typeof rest[i] === 'number') {
            result *= rest[i];
        }
    }
    if (result === 1){
        result = 0;
    }
    console.log(result);
}

// Task 4
function runTask4() {
    let server = {
        data: 0,
        convertToString: function (callback) {
           callback(( () => 
            this.data + ""
           ))
        }
     };
     let client = {
        server: server,
        result: "",
        calc: function (data) {
           this.server.data = data;
           this.server.convertToString(this.notification());
        },
        notification: function () {
            return ( (callback) =>
               this.result = callback()
            )
         }
      };
      client.calc(123);
      console.log(client.result);
      console.log(typeof client.result);
}

//Task 5
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keysArray, valuesArrays) {
    let map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArrays[i]);
    }
    console.log(map.size);
	console.log(map.get(2));

}
  
 
 
