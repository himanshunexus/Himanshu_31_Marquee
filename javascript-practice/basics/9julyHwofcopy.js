// Q1. Reference Copy (=)
// ----------------------
// Create an object student1 with:
// - name
// - age

// Assign it to student2 using (=).

// Tasks:
// 1. Change student2.name.
// 2. Print both objects.
// 3. Explain why both objects changed.


// Q2. Shallow Copy
// ----------------
// Create an object employee with:
// - name
// - department

// Tasks:
// 1. Create a shallow copy using the spread operator (...).
// 2. Change the department in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did or did not change.


// Q3. Shallow Copy with Nested Object
// -----------------------------------
// Create an object user with:
// - name
// - address
//     - city
//     - pincode

// Tasks:
// 1. Create a shallow copy using the spread operator.
// 2. Change address.city in the copied object.
// 3. Print both objects.
// 4. Explain why both objects show the same city.


// Q4. Deep Copy
// -------------
// Using the same user object:

// Tasks:
// 1. Create a deep copy using structuredClone().
// 2. Change address.pincode in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did not change.

// Q5. Bank Account
// ----------------
// Create an object with:
// - accountHolder
// - balance

// Create methods:
// 1. deposit(amount)
// 2. withdraw(amount)

// Requirements:
// - Update balance using this.balance.
// - Print balance after every transaction.




// Task 1: Reference Copy (=)

let student1 =  {
    "name": "Himanshu",
    "age": 22
}

let student2 = student1;
student2.name = "Mahi";

console.log(student1);
console.log(student2);

// Explanation: Both objects changed because student2 is a reference to the same object as student1. 
// When we change student2.name, it affects the original object that both variables point to.



// Task 2: Shallow Copy using Spread Operator

let emp = {
    "name": "Himanshu",
    "department": "IT"
}

let empShallowCopy = {...emp};
empShallowCopy.department = "HR";

console.log(emp);
console.log(empShallowCopy);

// Explanation: The original object did not change because we created a shallow copy using the spread operator. 
// Changes to the copied object do not affect the original object.


// Task 3: Shallow Copy with Nested Object


let person = {
    "name": "Himanshu",
    "address": {
        "city": "Delhi",
        "pincode": 110001
    }
}

let personShallowCopy = {...person};
personShallowCopy.address.city = "Mumbai";

console.log(person);
console.log(personShallowCopy);

// Explanation: Both objects show the same city because the shallow copy only copies the top-level properties. 
// The nested address object is still a reference to the same object in memory, so changes to it affect both copies.



// Task 4: Deep Copy

let personDeepCopy = structuredClone(person);
personDeepCopy.address.pincode = 400001;

console.log(person);
console.log(personDeepCopy);

// Explanation: The original object did not change because we created a deep copy using structuredClone(). 
// This method creates a completely independent copy of the object, including nested objects, so changes to the copied object do not affect the original.



// Task 5: Bank Account

let bankAccount = {
    accountHolder: "Himanshu",
    balance: 1000,
    
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    },
    
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance.");
        }
    }
}

bankAccount.withdraw(200); 
bankAccount.withdraw(1500);  

