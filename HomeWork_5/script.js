// //Task 1
// function propsCount(currentObject) {
//     let i = 0;
//     for (key in currentObject) {
//         i++;
//     }
//     console.log(i);
// }
// let object = {
//     name: 'Ivan',
//     surname: 'Petrov',
//     age: 22
// }
// propsCount(object);

// //Task 2
// function showProps(obj) {
//     let keysArr = [];
//     let valuesArr = [];
//     for (key in obj) {
//         keysArr.push(key);
//         valuesArr.push(obj[key]);
//     }
//     console.log(keysArr);
//     console.log(valuesArr);
// }
// showProps(object);

// //Task 3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//        return this.name + ' ' + this.surname;
//     }
// }
// class Student extends Person {
//     currentYear = new Date().getFullYear();
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }
//     showFullName(midleName) {
//         return this.surname + ' ' + this.name + ' ' + midleName;
//     }
//     showCourse() {
//         return this.currentYear - this.year;
//     }
// }
// let stud1 = new Student('Ivan', 'Sidorov', 2017);
// console.log(stud1.showFullName('Ivanovich'));
// console.log('Current course: ' + stud1.showCourse());

//Task 4
// class Worker {
//     experience = 1.2;
//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     setExp(experience) {
//         this.experience = experience;
//     } 
//     getExp() {
//         return this.experience;
//     }
//     showExp() {
//         return this.experience;
//     }
//     showSalary() {
//         return this.dayRate * this.workingDays;
//     }
//     showSalaryWithExperience() {
//         return this.dayRate * this.workingDays * this.experience
//     }   
// }
// let worker1 = new Worker('John Johnson', 20, 23);
// let worker2 = new Worker('Tom Tomson', 48, 22);
// let worker3 = new Worker('Andy Ander', 29, 23);

// console.log(worker1.fullName);
// console.log(worker1.fullName + ' salary: ' + worker1.showSalary());                 
// console.log("New experience: " + worker1.showExp());
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());
// worker1.setExp(1.5);
// worker2.setExp(1.5);
// worker3.setExp(1.5);
// console.log("New experience: " + worker1.showExp());
// console.log(worker1.fullName + ' salary: ' + worker1.showSalaryWithExperience());

// let workers = {
//     'John Johnson': worker1.showSalaryWithExperience(),
//     'Tom Tomson': worker2.showSalaryWithExperience(),
//     'Andy Ander': worker3.showSalaryWithExperience()
    
// }
// let arr = Object.entries(workers);
// arr.sort((a, b) => a[1] -b[1]);
// let sorted = Object.fromEntries(arr);
// console.log(sorted);

//Task 5

class GeometricFigure {
    getArea() {

    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }

}
class Triangle extends GeometricFigure {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    getArea() {
        return this.a * this.b * 0.5;
    }
}
class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return this.a * this.a;
    }
}
class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return 3.14 * this.r * this.r;
    }
}
let figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
function handleFigures(figures) {
    let sum = 0;
    for (let i = 0; i < figures.length; i++) {
        let name = figures[i].toString();
        let area = figures[i].getArea();
        console.log('Geometric figure: ' + name + ' - area: ' + area);
        sum += area;
    }
    console.log(sum + ' // total area');
}
handleFigures(figures);