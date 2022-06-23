//  This a calculator app built using IF statement

// take user operation
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take user input

const number1 = parseFloat(prompt(' Enter First number: '));
const number2 = parseFloat(prompt(' Enter Second number:  '));

let result;
if (operator == "+") {
    result = number1 + number2;
} else if (operator == "-") {
    result = number1 - number2;
} else if (operator == "*") {
    result = number1 * number2;
} else if (operator == "/") {
    result = number1 / number2;
}

// this display the result
console.log(` ${number1} ${operator} ${number2} = ${result} `);