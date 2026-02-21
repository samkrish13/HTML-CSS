console.log("Object Methods")
console.log("object.create()")

const personProto = {
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const john = Object.create(personProto);
john.name = "John";
john.greet(); // Output: Hello, my name is John

console.log("\nobject.keys()")
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

const keys = Object.keys(car);
console.log(keys); // Output: [ 'make', 'model', 'year' ]

console.log("\nobject.values()")
const values = Object.values(car);
console.log(values); // Output: [ 'Toyota', 'Corolla', 2020 ]   

console.log("\nobject.entries()")
const entries = Object.entries(car);
console.log(entries); 
// Output: [ [ 'make', 'Toyota' ], [ 'model', 'Corolla' ], [ 'year', 2020 ] ]

console.log("\nobject.assign()")
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }

console.log("\nobject.freeze()")
const frozenObject = {
  prop: "I am frozen"
};

Object.freeze(frozenObject);
frozenObject.prop = "Trying to change"; // This will not change the property
console.log(frozenObject.prop); // Output: I am frozen

console.log("\nobject.seal()")
const sealedObject = {
  prop: "I am sealed"
};

Object.seal(sealedObject);
sealedObject.prop = "Changed"; // This will change the property
sealedObject.newProp = "Trying to add"; // This will not add a new property
console.log(sealedObject.prop); // Output: Changed
console.log(sealedObject.newProp); // Output: undefined 

