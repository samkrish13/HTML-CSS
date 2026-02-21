//object types
var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car);
//inference based
var person = {
    name: "Alice",
    age: 30,
    isStudent: true
};
//person.name=123
//returns error because name is inferred as string and cannot be assigned a number.
//person.age="thirty"
//returns error because age is inferred as number and cannot be assigned a string.
//person.isStudent="yes"
//returns error because isStudent is inferred as boolean and cannot be assigned a string.
console.log(person);
//with and without optional proeprty
// const employee:{id:number,name:string,department:string}={
//     id:101,
//     name:"John Doe"
// }
// console.log(employee)
var employee = {
    id: 101,
    name: "John Doe",
    department: "Engineering"
};
console.log(employee);
//index signatures
var scores = {
    Math: 95,
    English: 88,
    Science: 92
};
scores.History = 90;
scores["Geography"] = 85;
console.log(scores);
//ENUMS-strings and numeric values
//first initialize the enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log("Favorite Color:", favoriteColor);
//ENUMS with custom values
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var currentStatus = Status.Active;
console.log("Current Status:", currentStatus);
//ENUMS with string values
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var moveDirection = Direction.Left;
console.log("Move Direction:", moveDirection);
//Enums with default values
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
})(Weekday || (Weekday = {}));
var today = Weekday.Wednesday;
console.log("Today is:", today);
//union types
function printId(id) {
    console.log("ID:", id);
}
printId(123);
printId("ABC123");
//function printID2(id:number|string){
//    console.log("ID:",id.toUpperCase())
//}
//function printID2(id:number|string){
//    console.log("ID:",(id/2))
//}
//returns error because id can be a number or a string, and toUpperCase is only valid for strings.
//default parameters for functions
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2)); // Uses default exponent of 10
console.log(pow(2, 6)); // Uses provided exponent of 3
//return type number
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(5, 10));
//return type void
function logMessage(message) {
    console.log("Log:", message);
}
logMessage("This is a log message");
//optional parameters
function added(a, b, c) {
    return a + b + (c || 0);
}
console.log(added(5, 10)); // c is optional, defaults to 0
console.log(added(5, 10, 15)); // c is provided
var bear = { name: "Winnie", honey: true };
function printPoint(point) {
    console.log("Point:", point.x, point.y);
}
printPoint({ x: 10, y: 20 });
var person2 = {
    name: "Bob",
    age: 25,
    greet: function () {
        console.log("Hello, I'm " + this.name);
    }
};
person2.greet();
