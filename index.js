
let option = prompt(`select operation :\n 1. Basic Arithmetic (+ ,- ,* ,/ )
    \n 2. Currency conversion (Doller to Rupee or Rupee to Doller)
    \n 3. Weight conversion (kg to Gram)
    \n 4. Temperature conversion (Celcius to Fahrenheit)\n Enter your choice (1/2/3/4):`)

    switch(option){
        case '1':
        let num1 = parseFloat(prompt("Enter first number"))
        let num2 = parseFloat(prompt("Enter second number"))
        let operation = prompt("Enter Operation: +,-,*,/")

        let result

        if(operation=='+') result= num1 +num2
        else if(operation=='-') result= num1 -num2
        else if(operation=='*') result= num1 *num2
        else if(operation=='/') result= num1 /num2
        else result="Inavalid Operation"
        alert("Result:" + result);
        
        break;

        case '2':
            let currencychoice = prompt("Enter '1' to convert Doller to Rupee or '2' to convert Rupee to Doller")
            let amount = parseFloat(prompt("enter the amount :"))
            let exchangerate = 82

            if(currencychoice=='1'){
                let result = amount*exchangerate
                alert("Result ="+result + "Rupee")
            }
            else if(currencychoice=='2'){
                let result = amount/exchangerate
                alert("Result ="+result +" Doller")
            }
            else{
                alert("Invalid currecy choice")
            }
            break
            case '3':
                let weight = parseFloat(prompt("Enter weight in kg"))
                alert(weight*1000 + "Gram")
            break

            case '4':
                let cs=parseFloat(prompt("Enter the temperature in celcius"))
                alert(cs*1.8 +32+" Farhenheit")
            default:
                alert("Invalid choice")


    }
    