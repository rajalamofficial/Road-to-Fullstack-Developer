const calculator = {
    miniDisplay: '',
    bigDisplay: '0',
    operator: null,
    firstNumber: null,
    waitForSecondNumber: false
};

function inputUser(target){
    calculator.miniDisplay += target.innerHTML;

    if(calculator.bigDisplay === '0'){
        calculator.bigDisplay = target.innerHTML
    } else if (target.innerHTML.includes('+') || target.innerHTML.includes('-') || target.innerHTML.includes('=')){
        return;
    } else {
        calculator.bigDisplay += target.innerHTML;
    }

}

function miniDisplay(){
    document.querySelector('.mini-display').innerHTML = calculator.miniDisplay;
}

function bigDisplay(){
    document.querySelector('.big-display').innerHTML = calculator.bigDisplay;
}

function clearDisplay(){
    calculator.miniDisplay = '';
    calculator.bigDisplay = '0';
    calculator.operator = null;;
    calculator.firstNumber = null;
    calculator.waitForSecondNumber = false;
}

function handleOperator(operator){
    if(!calculator.waitForSecondNumber){
        calculator.firstNumber = calculator.bigDisplay;
        calculator.bigDisplay = '0';
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
        result = parseInt(calculator.firstNumber) + parseInt(calculator.bigDisplay);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.bigDisplay);
    }
    
    calculator.bigDisplay = result;

    calculator.operator = null;
    calculator.waitForSecondNumber = false;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', btn => {
        let target = btn.target;
        let list = target.classList;

        if(list.contains('clear')){
            clearDisplay();
            miniDisplay();
            bigDisplay();
        } else if(list.contains('operator')){
            inputUser(target)
            handleOperator(target.innerHTML);
            miniDisplay();
        } else if(list.contains('equals')){
            equals();
            bigDisplay();
        }
        else {
            inputUser(target)
            miniDisplay();
        }



        console.log(calculator)
    });
});