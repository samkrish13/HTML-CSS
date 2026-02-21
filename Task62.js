console.log("Task 62");
//This is A single line comment
/*This is 
a multi line 
comment*/
console.log("Variables in JavaScript");

console.log("Example 1")
var x=32
x=40
console.log(x) //40 
/*Because we have reassigned the value of x from 32 to 40*/

console.log("Example 2")
var y=15
var y=25
console.log(y) //25
/*Because we have redeclared the variable y and assigned it a new value of 25*/

console.log("Example 3")
let a=10
a=20
console.log(a) //20
/*Because we have reassigned the value of a from 10 to 20*/

console.log("Example 4")
let b=5
//let b=15
//console.log(b) this will result in error because we have redeclared the variable b and it is not allowed with let
console.log(b) //5
/*Because we cannot redeclare a variable declared with let in the same scope*/

console.log("Example 5")
const c=50
//c=60 //Uncaught TypeError: Assignment to constant variable.
console.log(c) 
/*Because we cannot reassign a value to a constant variable declared with const*/

console.log("Assignment Operator Example 1")
var m=10
m+=5 //m=m+5
console.log(m) //15

console.log("Assignment Operator Example 2")
var n=20
n-=10 //n=n-10
console.log(n) //10

console.log("Assignment Operator Example 3")
var p=4
p*=3 //p=p*3
console.log(p) //12

console.log("Assignment Operator Example 4")
var q=16
q/=4 //q=q/4
console.log(q) //4

console.log("Comparison Operators Example 1")
var r=10
var s=20
console.log(r==s) //false

console.log("Comparison Operators Example 2")
var t=15
var u=15
console.log(t===u) //true

console.log("Comparison Operators Example 3")
var v=25
var w=30
console.log(v!=w) //true

console.log("Comparison Operators Example 4")
var A=5
var B=10
console.log(A!==B) //true

console.log("Comparison Operators Example 5")
var C=40
var D=35
console.log(C>D) //true

console.log("Comparison Operators Example 6")
var E=12
var F=18
console.log(E<F) //true

console.log("Comparison Operators Example 7")
var G=22
var H=22
console.log(G>=H) //true

console.log("Comparison Operators Example 8")
var I=8
var J=15
console.log(I<=J) //true

console.log("End of Comparison Operators Examples");

console.log("Logical Operators Example 1")
var K=10
var L=20
console.log(K<15 && L>15) //true

console.log("Logical Operators Example 2")
var M=5
var N=25
console.log(M>10 || N>20) //true

console.log("Logical Operators Example 3")
var O=30
console.log(!(O<40)) //false

console.log("End of Logical Operators Examples");
console.log("Pre Increement and Pre Decrement Operators Example 1")
var P=10
P++
console.log(P) //11

console.log("Pre Increement and Pre Decrement Operators Example 2")
var Q=20
Q--
console.log(Q) //19

console.log("End of Pre Increement and Pre Decrement Operators Examples");
console.log("Ternary Operator Example 1")
var R=15
var result=(R>10) ? "R is greater than 10" : "R is not greater than 10"
console.log(result) //R is greater than 10

console.log("Post Increement and Post Decrement Operators Example 1")
var T=25
console.log(T++) //25
console.log(T) //26

console.log("Post Increement and Post Decrement Operators Example 2")
var U=30
console.log(U--) //30
console.log(U) //29

console.log("End of Post Increement and Post Decrement Operators Examples");

console.log("Ternary Operator Example 2")
var S=8
var output=(S%2==0) ? "S is even" : "S is odd"
console.log(output) //S is even

console.log("End of Ternary Operator Examples");

console.log("Swapping Two Variables Example 1")
var A=10;
var B=20;
var temp=B;
A=B;
B=temp;
console.log("A:",A) //20
console.log("B:",B) //10

console.log("Swapping Two Variables Example 2 (Using Destructuring Assignment)")
var x=5;
var y=15;
[x,y]=[y,x];
console.log("x:",x) //15
console.log("y:",y) //5

console.log("End of Swapping Two Variables Examples");  

console.log(" ");

console.log("Arithmetic Operators Example 1")
var l=10
var m=5
console.log(l+m) //15
console.log(l-m) //5
console.log(l*m) //50
console.log(l/m) //2
console.log(l%m) //0

console.log("null coalescing operator Example 1");
var foo = null ?? 'default string';
console.log(foo); // Output: 'default string'

console.log("null coalescing operator Example 2");
var bar = 'I have a value' ?? 'default string';
console.log(bar); // Output: 'I have a value'