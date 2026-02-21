function calculate(operator) {
            let n1 = parseInt(document.getElementById("num1").value);
            let n2 = parseInt(document.getElementById("num2").value);
            let result;

            if(operator==='+'){
                result=n1+n2;
            }else if(operator==='-'){
                result=n1-n2;
            }else if(operator==='*'){
                result=n1*n2;
            }else if(operator==='/'){
                if(n2===0){
                    result="Cannot divide by zero";
                }else{
                    result=n1/n2;
                }
            } else if(operator==='%'){
                result=n1%n2;
            }

            document.getElementById("result").innerText = "Result: "+result;
        }