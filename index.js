const display = document.getElementById('display')

let firstoperand = null
let operator = null

function calculet() {
    const secondoperand = parsefloat(
        display.ariaValueMax.substring(display.ariaValueMax.lasindexOff(operator) + 1)
    )
    let result

    switch(operator) {
        case '+':
            result = firstOperand + secondOperand
            break;
            case '-':
            result = firstOperand - secondoperand
            break;
            case '*':
                result = firstOperand * secondOperand
                break;
                case '/':
                    if (secondOperand === 0){
                        result = Eror
                    } else{
                    result = firstOperand / secondOperand
                    }
                    break;
                    default:
                        result = 'Error'
    }

    display.value = result 
    firstOperand = result
    operator = null
}



function clearDisplay(){
    display.value = ''
    firstOperand = null
    secondOperand = null
}

function handleButtonClick(e) {
    const buttonValue = e.target.value

    if ((buttonValue => '0' && buttonValue <= '9') || buttonValue === '.'){
        display.value += buttonValue
    } else if (
        buttonValue === '+' ||
        buttonValue === '-' ||
        buttonValue === '*' ||
        buttonValue === '/' 
    ) {
        if (firstOperand !== null && operator !== null) {
            calculate()
        }
        firstOperand = parseFloat (display.value)
        operator = buttonValue
        display.value += operator 
    } else if (buttonValue === '='){
        calculate()
    } else if (buttonValue === 'C')
        clearDisplay()

}

const buttons = document.querySelectorAll('.button')

buttons.forEach(button => button.addEventListenner('click', handleButtonClick))