console.log("Object Methods - Continued")
console.log("object.hasOwnProperty()")

const animal = {
  species: "Dog",
  sound: "Bark"
};

console.log(animal.hasOwnProperty("species")); // Output: true
console.log(animal.hasOwnProperty("age")); // Output: false

console.log("\nobject.is()")
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(Object.is(obj1, obj2)); // Output: false
console.log(Object.is(obj1, obj3)); // Output: true

console.log("\nobject.getOwnPropertyNames()")
const book = {
  title: "1984",    
  author: "George Orwell",
  year: 1948
};

console.log(Object.getOwnPropertyNames(book)); // Output: ["title", "author", "year"]
console.log("\nobject.getPrototypeOf()")
const prototype = {
  describe: function() {
    return `This is a ${this.type}`;
  }
};

const item = Object.create(prototype);
item.type = "gadget";

console.log(Object.getPrototypeOf(item) === prototype); // Output: true
console.log(item.describe()); // Output: This is a gadget

console.log("\nobject.setPrototypeOf()")
const newProto = {
  info: function() {
    return `This is a ${this.name}`;
  }
};

const obj = {
  name: "widget"
};

Object.setPrototypeOf(obj, newProto);

console.log(obj.info()); // Output: This is a widget    
console.log("\nobject.isFrozen()")
const testObject = {
  key: "value"
};

Object.freeze(testObject);
console.log(Object.isFrozen(testObject)); // Output: true

console.log("\nobject.isSealed()")
const anotherObject = {
  key: "value"
};

Object.seal(anotherObject);
console.log(Object.isSealed(anotherObject)); // Output: true
console.log("\nobject.preventExtensions()")
const extensibleObject = {
  prop: "I can be extended"
};

Object.preventExtensions(extensibleObject);
extensibleObject.newProp = "Trying to add"; // This will not add a new property
console.log(extensibleObject.newProp); // Output: undefined     
console.log(Object.isExtensible(extensibleObject)); // Output: false
console.log("\nobject.isExtensible()")
const anotherExtensibleObject = {
    prop: "I can be extended"
    };  
    