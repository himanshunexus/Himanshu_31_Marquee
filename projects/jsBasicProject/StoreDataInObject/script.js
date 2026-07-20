const form = document.getElementById('store');
const res = document.getElementById('res');
const studentList = document.getElementById('studentList');
const userArr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value
        };
    userArr.push(user);
    // console.log(userArr);
    displayUsers();
});

function displayUsers() {
    studentList.innerHTML = ''; 
    // userArr.forEach((user, index) => {
    //     const li = document.createElement('li');
    //     li.textContent = `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
    //     studentList.appendChild(li);
    // });
    userArr.forEach(function(student,){
        studentList.innerHTML += `
        <li>Name: ${student.name}, 
        Age: ${student.age}, 
        Email: ${student.email}</li>`;
    });
    form.reset();
}
        




// Regular expression (regex) is a pattern search, match or validate text

// /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// let email = abc@gamil.com

// if(email.includes('@') && email.includes(".") )

// const regex = /pattern/

// 1. test() - checks whether a string matches the pattern
// const regex = /hello/;
// console.log(regex.test("My name is shreyansh hello"));


//Symobol 1. (^)  -> starts with 
// const regex = /^A/
// console.log(regex.test('pple'))


// Symbol 2. ($) -> Ends with
// const regex = /t$/
// console.log(regex.test('javascript sakjdjkasht  kk'))

// Symbol 2. (.) -> Anyone character

// const regex = /a..e/

// console.log(regex.test("abbe"))
