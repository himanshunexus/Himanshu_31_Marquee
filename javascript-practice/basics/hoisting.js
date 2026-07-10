console.log(name);
var name = "Himanshu";
console.log(name); 


// The Temporary Dead Zone (TDZ) is a specific period in JavaScript execution where 
// a variable exists but cannot be accessed. Attempting to read or write to a variable while it is in the 
// TDZ will immediately throw a ReferenceError

// 1. The Classic TDZ Error

{
    // --- TDZ for "age" starts here at the beginning of the block ---
    
    console.log(age); // ❌ Throws ReferenceError: Cannot access 'age' before initialization
    
    // --- TDZ is still active ---
    
    let age = 25; // 🏁 TDZ ends here! The variable is now initialized.
    
    console.log(age); //  Outputs: 25
}

// 2. Comparison: let vs var


// Using var (No TDZ)
console.log(myVar); // Outputs: undefined (hoisted and initialized)
var myVar = "hello";

// Using let (Has TDZ)
console.log(myLet); // ❌ ReferenceError (hoisted but uninitialized)
let myLet = "world";


// . The TDZ is Temporal (Time-Based, Not Location-Based)

{
    // 1. This function is physically located ABOVE the declaration
    function printValue() {
        console.log(myNumber); 
    }

    // 2. TDZ is still active for myNumber right now...

    // 3. If we call printValue() here, it will crash!
    
    let myNumber = 100; // 4. TDZ ends here.

    printValue(); //  Outputs: 100 (Safe because the TDZ ended before we called the function)
}




// var is hoisted and immediately initialized with undefined. You can access it before its line of code
//  runs without errors.let and const are hoisted but remain uninitialized. The gap between the 
//  scope starting and the initialization line running is the TDZ.


// function hoisting

console.log(total(5, 5)); 

const total = function(a, b) {
    return a + b;
};


// example 2

console.log(sayHello());

let sayHello = function() {
    return "Hello!";
};



console.log(x);
let x = 10;
function printX() {
    console.log(x); 
}


// hoisting with arrow function declarations

console.log(multiply(2, 3));

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(2, 3)); 