//Task 1
function calcRectangleArea(width, height) {
    try {
        if (!(parseInt(width) > 0) || !(parseInt(height) > 0)) {
            throw new ReferenceError('hi');
        }
        let s = width * height;
        console.log(s);
    } catch (error) {
        console.log(error.message);
    }
}

//Task 2
function checkAge() {
    let age;
    do {
    age = prompt('Enter your age');
    try {
        if (age === null) {
            return;
        }
        if (age === '' || age === ' ') {
            throw Error('The field is empty! Please enter your age');
        } else if (!(parseInt(age) > 0)) {
            throw Error('Enter a number, please');
        } else if (age < 14) {
            throw Error('Access denied')
        }
        alert('Access granted');
    } catch (error) {
        alert(error.message);
    }
    } while (!(parseInt(age) > 0) || age === null)
}

//Task 3
function showUser(id) {
    try {
        if (id < 0) {
            throw Error('ID must not be negative: ' + id);
        }
        let object = {
            id: id
        }
        return object;
    } catch (error) {
        alert(error.message);
    }

}

function showUsers(ids) {
    let arr = [];
    for (i = 0; i < ids.length; i++) {
        if (showUser(ids[i])) {
            arr.push(showUser(ids[i]));
        } 
    }
    console.log(arr);
}