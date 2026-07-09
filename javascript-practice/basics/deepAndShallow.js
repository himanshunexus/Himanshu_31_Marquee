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