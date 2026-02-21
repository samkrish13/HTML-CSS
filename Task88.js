
function AdvancedDemo(){
    const inputNumber = parseFloat(document.getElementById('Number').value);
    const powValue = parseFloat(document.getElementById('pow').value);
    const sqrtValue = parseFloat(document.getElementById('SQRT').value);
    const startValue = parseInt(document.getElementById('start').value);
    const endValue = parseInt(document.getElementById('end').value);

    const output = document.getElementById('output');

    output.innerHTML = `
    Round: ${Math.round(inputNumber)}<br>
    Floor: ${Math.floor(inputNumber)}<br>
    Ceil: ${Math.ceil(inputNumber)}<br>
    Pow: ${Math.pow(inputNumber, powValue)}<br>
    Sqrt: ${Math.sqrt(sqrtValue)}<br>
    Random (${startValue} - ${endValue}):${Math.floor(Math.random() * (endValue - startValue + 1)) + startValue}
    `;

}

