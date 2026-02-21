function stringDemo() {

    let str = document.getElementById("mainString").value;
    let start = parseInt(document.getElementById("sliceStart").value);
    let end = parseInt(document.getElementById("sliceEnd").value);
    let replaceWord = document.getElementById("replaceWord").value;
    let newWord = document.getElementById("newWord").value;

    let output = document.getElementById("output");

    if (str === "") {
        output.innerHTML = "Please enter a main string.";
        return;
    }

    output.innerHTML =
        `Upper: ${str.toUpperCase()} <br>
         Lower: ${str.toLowerCase()} <br>
         Length: ${str.length} <br>
         Slice: ${str.slice(start, end)} <br>
         Replace: ${str.replace(replaceWord, newWord)}`;
}
