const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
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
    calculator.waitingForSecondNumber = false;
}

function inverse(){
    calculator.displayNumber *= -1;
}

function handleOperator(operator){
    if(calculator.waitingForSecondNumber == false){
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan')
    }
}

function performCalculation(){
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert('Anda belum menetapkan operator');
        return;
      }

    let result = 0;
    if(calculator.operator === '+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        const target = event.target;
        if(target.classList.contains('clear')){
            clear();
            displayNumber();
        } else if(target.classList.contains('negative')){
            inverse();
            displayNumber();
        } else if(target.classList.contains('operator')){
            handleOperator(target.innerHTML)
        } else if(target.classList.contains('equals')){
            performCalculation();
            displayNumber();
        } else {
            inputUser(target.innerHTML);
            displayNumber();
        }
        console.log(calculator)
    });
});
