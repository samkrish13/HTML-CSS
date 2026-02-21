console.log('String Methods Examples')

var sampleText = "  Hello, Welcome to JavaScript String Methods!  "
console.log("Original String:",'"'+ sampleText + '"')

var lengthOfString = sampleText.length
console.log("Length of the String:", lengthOfString)

var upperCaseString = sampleText.toUpperCase()
console.log("Uppercase String:", '"' + upperCaseString + '"')

var lowerCaseString = sampleText.toLowerCase()
console.log("Lowercase String:", '"' + lowerCaseString + '"')

var trimmedString = sampleText.trim()
console.log("Trimmed String:", '"' + trimmedString + '"')

var substringExample = sampleText.substring(7, 14)
console.log("Substring (7 to 14):", '"' + substringExample + '"')

var replacedString = sampleText.replace("JavaScript", "JS")
console.log("Replaced 'JavaScript' with 'JS':", '"' + replacedString + '"')

var charAtIndex5 = sampleText.charAt(5)
console.log("Character at index 5:", '"' + charAtIndex5 + '"')

var indexOfWelcome = sampleText.indexOf("Welcome")
console.log("Index of 'Welcome':", indexOfWelcome)

var splitString = sampleText.trim().split(" ")
console.log("Split String into array:", splitString)

var includesJavaScript = sampleText.includes("JavaScript")
console.log("Does the string include 'JavaScript'?:", includesJavaScript)

var startsWithHello = sampleText.trim().startsWith("Hello")
console.log("Does the string start with 'Hello'?:", startsWithHello)

var endsWithMethods = sampleText.trim().endsWith("Methods!")
console.log("Does the string end with 'Methods!'?:", endsWithMethods)