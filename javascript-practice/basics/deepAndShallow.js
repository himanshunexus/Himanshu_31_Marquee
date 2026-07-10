// shallow copy
let Student = {
    name: "Himanshu",
    age: 20,
    grade: "A",
    semWiseMarks : {
        semester1: 7.6,
        semester2: 7.8,
        semester3: 8.6,
        semester4: 8.4,
    }
}


// by using Object.assign() method
let shallowCopy = Object.assign({}, Student);
console.log(shallowCopy);

// by using spread operator
let shallowCopy2 = {...Student};
console.log(shallowCopy2);

// rest operator
let {name, age, ...rest} = Student;
console.log(name);
console.log(age);
console.log(rest);

// updating the shallow copy
shallowCopy.name = "Mahi";
shallowCopy.semWiseMarks.semester1 = 8.0;

console.log(Student.name); // Himanshu (original object remains unchanged)
console.log(Student.semWiseMarks.semester1); // 8.0 (nested object is affected)


Student.name = "Leader";
shallowCopy.name = Student.name;
console.log(shallowCopy.name);


// shallow copy in arrays
let arr = [1, 2, 3, 4, 5];
let shallowArrCopy = [...arr];
console.log(shallowArrCopy);

shallowArrCopy[0] = 10;
console.log(arr[0]); // 1 (original array remains unchanged)

// deep copy
let deepCopy = structuredClone(Student);
console.log(deepCopy);

deepCopy.name = "Mahi";
deepCopy.semWiseMarks.semester1 = 9.0;

console.log(Student.name); // Himanshu (original object remains unchanged)
console.log(Student.semWiseMarks.semester1); // 8.0 (nested object is unaffected)

// Nesting shallow and deep copy
let a = [[1,2], [3,4]];
let b = [...a];
b[0][0] = 10;
console.log(a[0][0]); // 10 (original array is affected due to shallow copy)

let c = structuredClone(a);
c[0][0] = 20;
console.log(a[0][0]); // 10 (original array remains unchanged)






// Standard Deep Clone Function

// If you want to create a perfect duplicate of an object without keeping references 
// to the original, you can use this recursive function


function deepClone(inputData) {
    // 1. Handle primitive data types (numbers, strings, booleans, null, undefined)
    if (typeof inputData !== 'object' || inputData === null) {
        return inputData; 
    }

    // 2. Initialize the container as either an Array or an Object
    let result;
    if (Array.isArray(inputData)) {
        result = [];
    } else {
        result = {};
    }

    // 3. Loop through every property in the item
    for (let key in inputData) {
        // Only copy properties that belong directly to the object
        if (inputData.hasOwnProperty(key)) {
            // Recursively call the function for nested items
            result[key] = deepClone(inputData[key]);
        }
    }

    // 4. Return the brand new copy
    return result;
}




// How to Use It


const user = {
    name: "Alex",
    age: 25,
    hobbies: ["reading", "gaming"],
    address: {
        city: "New York",
        zip: 10001
    }
};

// Create the deep copy
const userCopy = deepClone(user);

// Prove they are independent by changing the copy
userCopy.address.city = "Los Angeles";
userCopy.hobbies.push("coding");

console.log(user.address.city);  // Output: "New York" (Original is safe!)
console.log(userCopy.address.city);  // Output: "Los Angeles"



// Deep Freeze Function


function deepFreeze(inputData) {
    // 1. Freeze the current level of the object immediately
    Object.freeze(inputData);

    // 2. Loop through every property to find nested objects
    for (let key in inputData) {
        if (inputData.hasOwnProperty(key)) {
            let value = inputData[key];

            // 3. If the property is a valid object, freeze it recursively
            if (typeof value === 'object') {
                if (value !== null) {
                    deepFreeze(value);
                }
            }
        }
    }

    // 4. Return the fully frozen object
    return inputData;
}




// Deep Merge Function


// This function takes two separate objects and combines them. If both objects share 
// a key that points to a nested object, it merges those nested layers instead of 
// overwriting them



function deepMerge(target, source) {
    // 1. Create a fresh container object to hold the merged result
    let result = {};

    // 2. Copy everything from the target object first
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            result[key] = target[key];
        }
    }

    // 3. Process and merge everything from the source object
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            
            // Check if the key exists in both objects and both are nested objects
            if (typeof result[key] === 'object' && result[key] !== null) {
                if (typeof source[key] === 'object' && source[key] !== null) {
                    // Both are objects, so merge them recursively
                    result[key] = deepMerge(result[key], source[key]);
                } else {
                    // Source is a primitive, overwrite the target object
                    result[key] = source[key];
                }
            } else {
                // Key doesn't conflict with an object, safe to overwrite or add
                result[key] = source[key];
            }
            
        }
    }

    // 4. Return the combined object
    return result;
}



// Examples of How to Use Them



// --- Deep Freeze Example ---
const user = { name: "Sam", settings: { theme: "dark" } };
deepFreeze(user);
user.settings.theme = "light"; // Silently fails or throws an error in strict mode
console.log(user.settings.theme); // Output: "dark"

// --- Deep Merge Example ---
const original = { name: "Alex", skills: { html: true } };
const updates = { age: 30, skills: { css: true } };

const merged = deepMerge(original, updates);
console.log(merged); 
// Output: { name: "Alex", age: 30, skills: { html: true, css: true } }
