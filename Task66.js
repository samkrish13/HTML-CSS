console.log("Functions Examples")
console.log("Functionn without Parameters and without Return Type")
function greet(){
    console.log("Hello, welcome to JavaScript Functions!")
}
greet()
console.log("Function with Parameters and without Return Type")
function addNumbers(x,y){
    var sum=x+y
    console.log("Sum of",x,"and",y,"is:",sum)
}
addNumbers(10,20)
addNumbers(5,15)

console.log("Function with Parameters and with Return Type")
function multiplyNumbers(a,b){
    return a*b
}
var result1=multiplyNumbers(4,5)
console.log("Product of 4 and 5 is:",result1)
var result2=multiplyNumbers(7,3)
console.log("Product of 7 and 3 is:",result2)

console.log("Function with Default Parameters")
function power(base, exponent=2){
    return Math.pow(base, exponent)
}
var square=power(6)
console.log("Square of 6 is:",square)
var cube=power(3,3)
console.log("Cube of 3 is:",cube)

console.log("End of Functions Examples")