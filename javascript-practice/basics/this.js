let student = {
    name : "mahi",
    age : "21",
    study : function(){
        console.log("studying ...")
    }
}

student.study()



// Defining an object named 'car' using object literal syntax
let car = {
  // Properties (Key-Value pairs)
  brand : "BMW",
  color : "black",
  
  // Method: A function defined inside an object to define behavior
  start: function(){
    console.log("Car started");
  },
  
  // Another method
  stop: function(){
    console.log("Car stopped");
  },
  
  // Method demonstrating the use of the 'this' keyword
  showBrand : function(){
    // 'this' refers to the current object (car) we are inside of.
    // 'this.brand' fetches the value "BMW" from this specific object.
    // brand = "DOGE"  if we define locally all set we wont need this anymore.
    console.log(this.brand);
  }
};

// CRUCIAL CONCEPT NOTE:
// JavaScript searches the local scope of the function first for any variable.
// If you just type `console.log(brand)`, JavaScript looks for a local or global variable 
// named 'brand' and will throw a ReferenceError because it cannot directly see the 
// object's property without prefixing it with 'this'.

// --- Executing the Methods ---

// Calling the start method
car.start();      // Output: Car started

// Calling the stop method
car.stop();       // Output: Car stopped

// Calling the showBrand method which correctly references object properties using 'this'
car.showBrand();  // Output: BMW




// --- THE "COPY CONCEPT" (OBJECT REFERENCES) ---

// 1. Defining the original object 'emp1'
let emp1 = {
  name: "Emma",
  introduce: function() {
    // JavaScript uses 'this' to reference properties inside the current object
    console.log(this.name); 
  }
};

// 2. Assigning emp1 to emp2
// CRUCIAL CONCEPT: This does NOT create a new, separate copy of the object.
// Instead, 'emp2' now points to the exact same memory location as 'emp1'.
// They are both references to the single underlying object.
let emp2 = emp1;

// 3. Modifying a property via emp2
// Because emp2 and emp1 point to the same object, changing emp2.name 
// automatically reflects when accessing emp1.name.
emp2.name = "Bob";

// 4. Executing the method
// Since the name was changed to "Bob" via the reference, this will output "Bob"
emp2.introduce(); // Output: Bob


// 1. Defining the first employee object
let emp1 = {
  // (Note: 'name: "Emma"' and 'greet' function are implied from the console output/context above line 63)
  name: "Emma",
  greet: function() {
    // 'this' dynamically refers to whoever is calling this function.
    console.log("Hello " + this.name);
  }
}

// 2. Defining the second employee object
let emp2 = {
  name: "Bob",
  
  // Here, we are NOT rewriting the function. 
  // We are copying the REFERENCE of emp1's greet function and assigning it to emp2's greet property.
  greet: emp1.greet 
  
  // CRUCIAL CONCEPT: 
  // Even though the function was originally written inside 'emp1', 
  // JavaScript doesn't lock 'this' to emp1. 
  // 'this' is decided at runtime based on the object that executes the method.
}

// --- Execution & Output ---

// emp1 calls the function -> 'this' points to emp1 -> uses emp1.name ("Emma")
emp1.greet(); // Output: Hello Emma

// emp2 calls the exact same function -> 'this' now points to emp2 -> uses emp2.name ("Bob")
emp2.greet(); // Output: Hello Bob



// The Golden Rule of this for your Exam:
// In JavaScript, the value of this is not determined by where 
// a function is defined, but by how the function is called (the object before the dot .).