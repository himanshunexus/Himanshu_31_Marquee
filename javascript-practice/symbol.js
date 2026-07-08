// In JavaScript, Symbol() is a built-in function that creates a unique, 
// immutable primitive value.Once created, a Symbol is guaranteed to be completely 
// unique from any other value in your program. Even if you create two symbols with 
// the exact same description, they are not equal.



const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2); // ❌ false (Each Symbol is unique)


// 2. Avoiding Property Name Collisions
// 3. Hiding Properties from Standard Loops


// Advanced: Well-Known SymbolsJavaScript uses pre-defined internal symbols
//  (called "Well-Known Symbols") to let you hook into core language 
//  behaviors.Symbol.iterator: 
//  Allows you to define how an object should behave when used in a for...of 
//  loop.Symbol.toStringTag: Allows you to customize the string description 
//  returned by Object.prototype.toString.call().

// No new keyword: You call Symbol() as a function, not a constructor 
// (const sym = new Symbol() will throw an error).Cannot auto-convert to string: 
// Symbols do not implicitly convert to strings. You cannot do alert(sym). 
// You must explicitly call sym.toString() or use sym.description.Global Registry: 
// If you actually want to share a symbol globally across your application, 
// use Symbol.for("key") instead of Symbol()



let myEnroll = Symbol("2403051050190");
let herEnroll = Symbol("2403051050191");

console.log(myEnroll === herEnroll);

let Student= {
    [myEnroll]: "2403051050190",
    name : "Himanshu",
    age : 23,
    course : "MERN"
}


console.log(Student[myEnroll]); // Accessing the Symbol property
console.log(Object.keys(Student));
console.log(Object.getOwnPropertySymbols(Student)); // Getting Symbol properties



const user = { name: "Alice" };

// Create a unique key
const id = Symbol("userId");
user[id] = 12345;

console.log(user[id]);