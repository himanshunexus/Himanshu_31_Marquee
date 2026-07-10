// Object destructuring is a JavaScript syntax introduced in ES6 that lets you unpack
//  properties from objects directly into distinct variables. It reduces boilerplate
//   code by eliminating the need to repeatedly type objectName.propertyName

const user = {
    firstName: "John",
    age: 28,
    country: "India"
};

// Traditional Way
const oldName = user.firstName;
const oldAge = user.age;

// Destructuring Way
const { firstName, age, country } = user;

console.log(firstName); // Output: John
console.log(age);       // Output: 28
console.log(country);   // Output: India


// Core Features and Use Cases

// 1. Renaming Variables
// If you want the extracted variable to have a different name than the object key, 
// use a colon : to assign an alias.

const product = { id: 101, title: "Laptop" };

// Rename 'title' to 'itemName'
const { title: itemName, id } = product;

console.log(itemName); // Output: Laptop
console.log(id);       // Output: 101


// 2. Default Values
// If a property does not exist in the object, the variable will normally be undefined
// . You can assign a default value using the equals = sign, which applies only if
//  the property is missing.

const profile = { username: "Dev99" };

// 'role' falls back to 'guest' because it is missing in the profile object
const { username, role = "guest" } = profile;

console.log(role); // Output: guest



// 3. Nested Object Destructuring
// You can extract deeply nested properties by mirroring the structure of the target object.
const order = {
    id: 554,
    shipping: {
        city: "Mumbai",
        zip: 400001
    }
};

// Extract city directly from the nested shipping object
const { shipping: { city } } = order;

console.log(city); // Output: Mumbai


// 4. Function Parameter Destructuring

// Instead of passing an entire object to a function and accessing properties inside it, you can destructure 
// the properties directly inside the function's parameter list. This is heavily used in frameworks like React.

const vehicle = { brand: "Tata", model: "Nexon" };

// Destructuring right inside the parameter brackets
function displayVehicle({ brand, model }) {
    console.log(`Driving a ${brand} ${model}`);
}

displayVehicle(vehicle); // Output: Driving a Tata Nexon



// 5. Rest Syntax (...)

// You can use the rest operator (...) to extract a few specific properties and gather all the remaining
//  properties into a brand new object container.


const settings = { theme: "dark", volume: 80, balance: 0, layout: "grid" };

// Extract 'theme', bundle the rest into 'audioSettings'
const { theme, ...audioSettings } = settings;

console.log(theme);         // Output: "dark"
console.log(audioSettings); // Output: { volume: 80, balance: 0, layout: "grid" }
