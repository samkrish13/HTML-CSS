console.log("Operators examples")
console.log("SUM AND Average of five numbers")
a=10
b=20
c=30
d=40
e=50
sum=a+b+c+d+e
average=sum/5
console.log("Sum is:",sum)
console.log("Average is:",average)

console.log("Simple Interest Calculation")
principal=1000
rate=5
time=2
interest=(principal*rate*time)/100
console.log("Simple Interest is:",interest)

console.log("Compound Interest Calculation")
principal=2000
rate=10
time=3
amount=principal * (Math.pow((1 + rate / 100), time))
compound_interest=amount - principal
console.log("Compound Interest is:",compound_interest)