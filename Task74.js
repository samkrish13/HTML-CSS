console.log("Object and its methdos")
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    isAdult: function() {
        return this.age >= 18;
    }
};
console.log("Using Dot Notation to access properties and methods:");
console.log("First Name:", person.firstName);
console.log("Last Name:", person.lastName);
console.log("Age:", person.age);
console.log("Full Name:", person.fullName());
console.log("Is Adult:", person.isAdult());
console.log("End of Object and its methods");

console.log("Using Bracket Notation to access properties and methods:");
console.log("First Name:", person["firstName"]);
console.log("Last Name:", person["lastName"]);
console.log("Age:", person["age"]);
console.log("Full Name:", person["fullName"]());
console.log("Is Adult:", person["isAdult"]());

console.log("pass fn inside object");
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Cannot divide by zero";
        }
    }
};
console.log("Addition of 5 and 3:", calculator.add(5, 3));
console.log("Subtraction of 5 from 10:", calculator.subtract(10, 5));
console.log("Multiplication of 4 and 6:", calculator.multiply(4, 6));
console.log("Division of 20 by 4:", calculator.divide(20, 4));
console.log("End of pass function inside object");  

console.log("Nested Objects Example");
const student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345"
    },
    getAddress: function() {
        return this.address.street + ", " + this.address.city + ", " + this.address.zipCode;
    }
};
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Address:", student.getAddress());
console.log("End of Nested Objects Example");   

console.log("object methods example");
console.log("object creation using Object.create()");
const animal = {
    type: "Invertebrate",
    displayType: function() {
        console.log("Type:", this.type);
    }
};
const fish = Object.create(animal);
fish.type = "Fish";
fish.displayType();

console.log("object creation using Object.assign()");
const vehicle = {
    wheels: 4,
    displayWheels: function() {
        console.log("Wheels:", this.wheels);
    }
};
const car = {};
Object.assign(car, vehicle);
car.displayWheels();

