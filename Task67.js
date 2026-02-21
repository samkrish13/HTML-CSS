console.log("Arrow Functions Examples")
console.log("Arrow Function without Parameters")
var sayHello=()=>{
    console.log("Hello from Arrow Function!")
}
sayHello()

console.log("Arrow Function with Parameters")
var add=(a,b)=>{
    return a+b
}
var sumResult=add(10,15)
console.log("Sum of 10 and 15 is:",sumResult)

console.log("Arrow Function with Single Parameter")
var square=x=>x*x
var squareResult=square(6)
console.log("Square of 6 is:",squareResult)

console.log("Arrow Function with Multiple Statements")
var factorial=n=>{
    var result=1
    for(var i=1;i<=n;i++){
        result*=i
    }
    return result
}
var factResult=factorial(5)
console.log("Factorial of 5 is:",factResult)

console.log("End of Arrow Functions Examples")