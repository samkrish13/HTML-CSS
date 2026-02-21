console.log("Spread Operator Example"); 
const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combinedNumbers = [...numbers, ...moreNumbers];
console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6]

const person = { name: "Alice", age: 25 };
const additionalInfo = { city: "New York", country: "USA" };
const fullProfile = { ...person, ...additionalInfo };
console.log(fullProfile); // Output: { name: "Alice", age: 25, city: "New York", country: "USA" }

console.log("setTimeout Example");
console.log("Start");   
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);
console.log("End"); 
console.log("Promise Example");
const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Error fetching data.");
    }
});

fetchData
    .then((message) => {
        console.log(message); // Output: Data fetched successfully!
    })
    .catch((error) => {
        console.error(error);
    });             
console.log("Async/Await Example");
async function getData() {
    try {
        const data = await fetchData;
        console.log(data); // Output: Data fetched successfully!
    } catch (error) {
        console.error(error);
    }
}

getData();  
console.log("Array Methods Example");
const nums = [1, 2, 3, 4, 5];   
const squaredNums = nums.map(num => num * num);
console.log(squaredNums); // Output: [1, 4, 9, 16, 25]   
const evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums); // Output: [2, 4]   
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // Output: 15 
console.log("Class Example");
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.      
console.log("Module Example");
// module.js
export function greet(name) {
    return `Hello, ${name}!`;
}

