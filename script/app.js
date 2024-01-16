
// FETCH THE CALCULATOR DIV OR SECTION HERE AND USE IT WHERE NEEDE
const calcultor = document.querySelector('.calculator-container');

const appButtons = document.querySelector('.application_buttons');

// START OF OPEN AND CLOSE CALCULATOR
const openCalculator = document.getElementById('open_calc');

openCalculator.addEventListener('click', function() {
    calcultor.classList.add('calc-active');
    // appButtons.style.top = '-60px';
});

const closeCalculator = document.getElementById('close_calc');

closeCalculator.addEventListener('click', function() {
    calcultor.classList.remove('calc-active');
    // appButtons.style.top = '0';
})

//END OF OPEN AND CLOSE CALCULATOR


// CALCULATOR FUNCTIONALITIES START HERE

const display = document.getElementById('display_calc_fig');

function appendToDisplay(value) {
    display.value += value;

    if(display.value.length > 9) {
        display.style.fontSize = '30px';
    }
    // else if(display.value.length < 11) {
    //     display.style.fontSize = '55px';
    // }
}

function clearDisplay() {
    display.value = '';
    display.style.fontSize = '55px';
}

function changeSign() {
    if(display.value !== '') {
        display.value = parseFloat(display.value) * -1;
    }
}

function calculatePercentage() {
    if(display.value !== '') {
        display.value = parseFloat(display.value) / 100;
    }
}

function deleteOneFigure() {
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);

    if(display.value.length < 10) {
        display.style.fontSize = '55px';
    }
}

// THIS FUNCTION CALCULATES THE RESULTS IN THE DISPLAY AREA
function calculateResult() {
    try{
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}