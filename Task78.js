console.log("Task 78");
const arr = [10, 20, 30, 40, 50];

console.log("1. values():");
for (const value of arr.values()) {
    console.log(value);
}

console.log("2. length():");
console.log(arr.length);

console.log("3. reverse():");
console.log(arr.slice().reverse());

console.log("4. sort():");
console.log(arr.slice().sort((a, b) => b - a));

console.log("5. at():");
console.log(arr.at(2));

console.log("6. fill():");
const filledArr = arr.slice();
filledArr.fill(0, 1, 4);
console.log(filledArr);

console.log("7. from():");
const newArr = Array.from({ length: 5 }, (_, i) => i * 10);
console.log(newArr);

console.log("8. join():");
console.log(arr.join('-'));

console.log("9. toString():");
console.log(arr.toString());

console.log("10. pop():");
const popArr = arr.slice();
popArr.pop();
console.log(popArr);

console.log("11. forEach():");
arr.forEach(num => console.log(num * 2));

console.log("12. shift():");
const shiftArr = arr.slice();
shiftArr.shift();
console.log(shiftArr);

console.log("13. copyWithin():");
const copyArr = arr.slice();
copyArr.copyWithin(0, 3, 5);
console.log(copyArr);

console.log("14. push():");
const pushArr = arr.slice();
pushArr.push(60);
console.log(pushArr);

console.log("15. unshift():");
const unshiftArr = arr.slice();
unshiftArr.unshift(0);
console.log(unshiftArr);

console.log("16. concat():");
const concatArr = arr.concat([60, 70]);
console.log(concatArr);

console.log("17. some():");
const hasLargeNum = arr.some(num => num > 40);
console.log(hasLargeNum);

console.log("18. splice():");
const spliceArr = arr.slice();
spliceArr.splice(2, 1, 25, 35);
console.log(spliceArr);

console.log("19. flat():");
const nestedArr = [10, [20, [30, 40]], 50];
console.log(nestedArr.flat(2));

console.log("20. lastIndexOf():");
console.log(arr.lastIndexOf(30));

console.log("21. of():");
const ofArr = Array.of(1, 2, 3, 4, 5);
console.log(ofArr);

console.log("22. every():");
const allPositive = arr.every(num => num > 0);
console.log(allPositive);

console.log("23. slice():");
console.log(arr.slice(1, 4));

console.log("24. flatMap():");
const flatMapArr = [1, 2, 3].flatMap(num => [num, num * 2]);
console.log(flatMapArr);

console.log("25. findIndex():");
const findIndex = arr.findIndex(num => num === 30);
console.log(findIndex);

console.log("26. find():");
const foundNum = arr.find(num => num > 25);
console.log(foundNum);

console.log("27. includes():");
const includesNum = arr.includes(20);
console.log(includesNum);

console.log("28. entries():");
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}   