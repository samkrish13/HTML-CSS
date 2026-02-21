console.log("Array and its methods Examples")
var colors=["Red","Green","Blue"]
console.log("Initial Array:",colors)

colors.push("Yellow")
console.log("After push('Yellow'):",colors)

colors.unshift("Purple")
console.log("After unshift('Purple'):",colors)

var removedColor1=colors.pop()
console.log("After pop():",colors)
console.log("Removed Color:",removedColor1)

var removedColor2=colors.shift()
console.log("After shift():",colors)
console.log("Removed Color:",removedColor2)

var indexOfBlue=colors.indexOf("Blue")
console.log("Index of 'Blue':",indexOfBlue)

var slicedColors=colors.slice(0,2)
console.log("Sliced Array (0 to 2):",slicedColors)

colors.splice(1,1,"Orange","Pink")
console.log("After splice(1,1,'Orange','Pink'):",colors)

console.log("Iterating through the array:")
colors.forEach(function(color,index){
    console.log("Color at index",index,":",color)
})

console.log("End of Array and its methods Examples")