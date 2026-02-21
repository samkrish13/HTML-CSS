//object types

const car:{brand:string,model:string,year:number}={
    brand:"Toyota",
    model:"Camry",
    year:2020
}
console.log(car)

//inference based
const person={
    name:"Alice",
    age:30,
    isStudent:true
}
//person.name=123
//returns error because name is inferred as string and cannot be assigned a number.

//person.age="thirty"
//returns error because age is inferred as number and cannot be assigned a string.

//person.isStudent="yes"
//returns error because isStudent is inferred as boolean and cannot be assigned a string.
console.log(person)


//with and without optional proeprty

// const employee:{id:number,name:string,department:string}={
//     id:101,
//     name:"John Doe"
// }
// console.log(employee)

const employee:{id:number,name:string,department:string}={
        id:101,
        name:"John Doe",
        department:"Engineering"
}
console.log(employee)

//index signatures
const scores:{[subject:string]:number}={
    Math:95,
    English:88,
    Science:92
}
scores.History=90
scores["Geography"]=85
console.log(scores)

//ENUMS-strings and numeric values
//first initialize the enum
enum Color{
    Red,//0
    Green,//1
    Blue//2
}
let favoriteColor:Color=Color.Green
console.log("Favorite Color:",favoriteColor)

//ENUMS with custom values
enum Status{
    Active=1,
    Inactive=0,
    Pending=2
}
let currentStatus:Status=Status.Active
console.log("Current Status:",currentStatus)

//ENUMS with string values
enum Direction{
    Up="UP",
    Down="DOWN",
    Left="LEFT",
    Right="RIGHT"
}
let moveDirection:Direction=Direction.Left
console.log("Move Direction:",moveDirection)    

//Enums with default values
enum Weekday{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}
let today:Weekday=Weekday.Wednesday
console.log("Today is:",today)

//union types
function printId(id:number|string){
    console.log("ID:",id)
}
printId(123)
printId("ABC123")

//function printID2(id:number|string){
//    console.log("ID:",id.toUpperCase())
//}

//function printID2(id:number|string){
//    console.log("ID:",(id/2))
//}
//returns error because id can be a number or a string, and toUpperCase is only valid for strings.


//default parameters for functions
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

console.log(pow(2)) // Uses default exponent of 10
console.log(pow(2,6)) // Uses provided exponent of 3

//return type number
function add(a:number,b:number):number{
    return a+b
}
console.log("Sum:",add(5,10))

//return type void
function logMessage(message:string):void{
    console.log("Log:",message)
}
logMessage("This is a log message")

//optional parameters
function added(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(added(5, 10)) // c is optional, defaults to 0
console.log(added(5, 10, 15)) // c is provided

//intersection types
type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };


//type aliases
type Point={x:number,y:number}
function printPoint(point:Point):void{
    console.log("Point:",point.x,point.y)
}
printPoint({x:10,y:20})

//interfaces
interface Person{
    name:string,
    age:number,
    greet():void
}
const person2:Person={
    name:"Bob",
    age:25,
    greet(){
        console.log("Hello, I'm "+this.name)
    }
}
person2.greet() 

