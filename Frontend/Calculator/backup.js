const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitForSecondNumber: false
};

function displayNumber(){
    document.querySelector('.displayNumber').innerHTML = calculator.displayNumber;
}

function inputUser(n){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = n;
    } else {
        calculator.displayNumber += n;
    }
}

function clear(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitForSecondNumber = false;
}

function negative(){
    calculator.displayNumber *= -1;
}

function handleOperator(operator){
    if(!calculator.waitForSecondNumber){
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
        calculator.operator = operator;
        calculator.waitForSecondNumber = true;
    } else {
        alert('operator sudah ditetapkan')
    }
}

function equals(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert('Operator belum ditetapkan!')
        return;
    }

    let result = 0;

    if(calculator.operator === '+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    
    calculator.displayNumber = result;

    calculator.operator = null;
    calculator.waitForSecondNumber = false;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        const target = event.target;
        if(target.classList.contains('clear')){
            clear();
            displayNumber();
        } else if(target.classList.contains('negative')){
            negative();
            displayNumber();   
        } else if(target.classList.contains('operator')){
            handleOperator(target.innerHTML);
        } else if(target.classList.contains('equals')){
            equals();
            displayNumber();
        }
        else {            
            inputUser(target.innerHTML);
            displayNumber();
        }

        console.log(calculator)
    });
});