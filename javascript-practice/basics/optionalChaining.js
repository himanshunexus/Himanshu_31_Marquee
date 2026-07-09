const user = { name: "Alice" }; 

// console.log(user.address.city);   // ❌ Throws TypeError
console.log(user.address?.city);



const data = { scores: [90, 85, 95] };

console.log(data.lists?.[0]); 
console.log(data.scores?.[0]); 



const calculator = {
  add: (a, b) => a + b
};

console.log(calculator.clear?.()); 
console.log(calculator.add?.(2, 3)); 


