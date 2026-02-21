//Task 90: Boolean Variables
var isActive = true;
var hasPassed = false;
var isAvailable = true;
console.log("Is Active:", isActive);
console.log("Has Passed:", hasPassed);
console.log("Is Available:", isAvailable);
//Number Variables
var age = 30;
var score = 85.5;
var count = 100;
console.log("Age:", age);
console.log("Score:", score);
console.log("Count:", count);
//String Variables
var Name = "Alice";
var city = "New York";
var message = "10";
console.log("Name:", Name);
console.log("City:", city);
console.log("Message:", message);
//Symbol Variables
var sym1 = Symbol("sym1");
var sym2 = Symbol("sym2");
console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);
//Explicit And Inference Typing
var explicitString = "This is an explicit string";
var explicitNumber = 3;
var explicitBoolean = true;
var inferredString = "This is an inferred string";
inferredString = "second Value";
var inferredNumber = 3;
var inferredBoolean = true;
console.log("Explicit String:", explicitString);
console.log("Explicit Number:", explicitNumber);
console.log("Explicit Boolean:", explicitBoolean);
console.log("Inferred String:", inferredString);
console.log("Inferred Number:", inferredNumber);
console.log("Inferred Boolean:", inferredBoolean);
//type safety in actions
var num1 = 10;
//num1=true
//This will cause a type error because num1 is declared as a number and cannot be assigned a boolean value.This is Explicit Type MisMatch
var num2 = 20;
//num2="twenty"
//This will cause a type error because num2 is inferred as a number and cannot be assigned a string value.This is Inference Type MisMatch
var sum = num1 + num2;
console.log("Sum:", sum);
//TypeScript special Types
//ANY Type
var v = "This can be any type";
console.log("Value of v:", v);
v = 42;
console.log("Value of v:", v);
v = true;
console.log("Value of v:", v);
//unknown Type
function processValue(value) {
    if (typeof value === "string") {
        console.log("Processing string:", value);
    }
    else if (typeof value === "number") {
        console.log("Processing number:", value);
    }
    else {
        console.log("Unknown type");
    }
}
processValue("Hello");
processValue(42);
processValue(true);
//never Type
function throwError(message) {
    throw new Error(message);
}
//let A:never=true
//console.log("Value of A:",A)
// //This will cause a type error because A is declared as never and cannot be assigned any value, including boolean true. The never type represents values that never occur, so it cannot hold any value.
//TypeScript Arrays
var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.push(7);
console.log(numbers[0], numbers[5]);
console.log("Numbers:", numbers);
var names = ["Alice", "Bob", "Charlie"];
names.push("David");
console.log("Names:", names);
//arays readonly
var readonlyNumbers = [1, 2, 3, 4, 5];
//readonlyNumbers.push(6)
//This will cause a type error because readonlyNumbers is declared as a readonly array and cannot be modified after initialization. The push method is not allowed on a readonly array.
console.log("Readonly Numbers:", readonlyNumbers);
var students = ["Alice", "Bob", "Charlie"];
students.push("David");
//students.push(7)
//This will cause a type error because students is declared as an array of strings and cannot be assigned a number value. The push method expects a string argument, so passing a number will result in a type error.
console.log("Students:", students);
//tuples
var person = ["Alice", 30];
console.log("Person:", person);
person[0] = "Bob";
person[1] = 25;
console.log("Updated Person:", person);
//person[0]=30
//This will cause a type error because person is declared as a tuple with a string as the first element and a number as the second element. Assigning a number to the first element violates the tuple's type definition, resulting in a type error.
