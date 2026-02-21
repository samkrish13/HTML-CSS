let output=document.getElementById("output")
let list=document.getElementById("list")
let box=document.getElementById("box")
let input=document.getElementById("inputText")

function basic(){
    let a=15
    let b=4
    let result=a>b?"A is greater":"B is greater"
    output.innerHTML=`Sum:${a+b}<br>Diff:${a-b}<br>Mul:${a*b}<br>Div:${a/b}<br>Mod:${a%b}<br>${result}`
}

function mathDemo(){
    let num=36.789
    output.innerHTML=`Round:${Math.round(num)}<br>Floor:${Math.floor(num)}<br>Ceil:${Math.ceil(num)}<br>Sqrt:${Math.sqrt(64)}<br>Pow:${Math.pow(3,3)}<br>Random:${Math.floor(Math.random()*100)}`
}

function stringDemo(){
    let str="JavaScript Mastery"
    output.innerHTML=`Upper:${str.toUpperCase()}<br>Lower:${str.toLowerCase()}<br>Slice:${str.slice(0,10)}<br>Replace:${str.replace("Mastery","World")}<br>Includes:${str.includes("Java")}`
}

function arrayDemo(){
    let arr=[5,10,15,20,25]
    let mapped=arr.map(x=>x*3)
    let filtered=arr.filter(x=>x>12)
    let reduced=arr.reduce((a,b)=>a+b,0)
    list.innerHTML=""
    mapped.forEach(x=>{
        let li=document.createElement("li")
        li.textContent=x
        list.appendChild(li)
    })
    output.innerHTML=`Filtered:${filtered}<br>Reduced:${reduced}`
}

function objectDemo(){
    let user={
        name:"john",
        age:21,
        skills:["HTML","CSS","JS"],
        greet(){return "Hello "+this.name}
    }
    let {name,skills}=user
    output.innerHTML=`Name:${name}<br>Skills:${skills.join(",")}<br>${user.greet()}`
}

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    info(){
        return this.name+" is "+this.age
    }
}

class Developer extends Person{
    constructor(name,age,role){
        super(name,age)
        this.role=role
    }
    details(){
        return this.info()+" working as "+this.role
    }
}

function classDemo(){
    let dev=new Developer("Samiksha",21,"Frontend Developer")
    output.innerHTML=dev.details()
}

function closureDemo(){
    function counter(){
        let count=0
        return function(){
            count++
            return count
        }
    }
    let inc=counter()
    output.innerHTML=`${inc()}<br>${inc()}<br>${inc()}`
}

function jsonDemo(){
    let obj={title:"JS",level:"Advanced"}
    let json=JSON.stringify(obj)
    let parsed=JSON.parse(json)
    output.innerHTML=`JSON:${json}<br>Parsed:${parsed.title}`
}

function storageDemo(){
    localStorage.setItem("username","Samiksha")
    output.innerHTML="Stored:"+localStorage.getItem("username")
}

function asyncDemo(){
    output.innerHTML="Loading..."
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res=>res.json())
    .then(data=>{
        output.innerHTML=`Title:${data.title}`
    })
}

function* generator(){
    yield 1
    yield 2
    yield 3
}

function generatorDemo(){
    let gen=generator()
    output.innerHTML=`${gen.next().value}<br>${gen.next().value}<br>${gen.next().value}`
}

function factorial(n){
    if(n<=1) return 1
    return n*factorial(n-1)
}

function recursionDemo(){
    output.innerHTML="Factorial 5:"+factorial(5)
}

function toggleBox(){
    box.classList.toggle("active")
}

function addItem(){
    let value=input.value
    if(value!==""){
        let li=document.createElement("li")
        li.textContent=value
        li.addEventListener("click",()=>li.remove())
        list.appendChild(li)
        input.value=""
    }
}
