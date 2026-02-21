console.log("Conditional Statements Examples")
console.log("Only If Statement Example")
var age=20
if(age>=18){
    console.log("You are eligible to vote")
}

console.log("If-Else Statement Example")
var number=7
if(number%2==0){
    console.log(number,"is an Even number")
} else {
    console.log(number,"is an Odd number")
}

console.log("If-Else If-Else Statement Example")
var marks=85
if(marks>=90){
    console.log("Grade: A")
} else if(marks>=75){
    console.log("Grade: B")
} else if(marks>=60){
    console.log("Grade: C")
} else {
    console.log("Grade: D")
}

console.log("ladder if-else Statement Example")
var day=3
if(day==1){
    console.log("Monday")
} else if(day==2){
    console.log("Tuesday")
} else if(day==3){
    console.log("Wednesday")
} else if(day==4){
    console.log("Thursday")
} else if(day==5){
    console.log("Friday")
} else if(day==6){
    console.log("Saturday")
} else if(day==7){
    console.log("Sunday")
} else {
    console.log("Invalid day number")
}

console.log("Nested if-else Statement Examples")
var num=15
if(num>0){
    if(num%2==0){
        console.log(num,"is a Positive Even number")
    } else {
        console.log(num,"is a Positive Odd number")
    }
} else if(num<0){
    if(num%2==0){
        console.log(num,"is a Negative Even number")
    } else {
        console.log(num,"is a Negative Odd number")
    }
} else {
    console.log("The number is Zero")
}

console.log("Switch Statements Examples")
var fruit="Apple"
switch(fruit){
    case "Apple":
        console.log("You selected Apple")
        break
    case "Banana":
        console.log("You selected Banana")
        break
    case "Orange":
        console.log("You selected Orange")
        break
    default:
        console.log("Unknown fruit selected")
}

var month=4
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    case 7:
        console.log("July")
        break
    case 8:
        console.log("August")
        break
    case 9:
        console.log("September")
        break
    case 10:
        console.log("October")
        break
    case 11:
        console.log("November")
        break
    case 12:
        console.log("December")
        break
    default:
        console.log("Invalid month number")
}
console.log("End of Conditional Statements Examples");