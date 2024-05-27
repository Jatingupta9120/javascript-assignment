function calculateExpression(expression) {
    // Remove whitespace from the expression
    expression = expression.replace(/\s/g, '');

    // Define operator precedence
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    // Function to perform operation
    function applyOperator(operator, operand1, operand2) {
        switch (operator) {
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
        }
    }

    const operatorStack = [];
    const operandStack = [];

    // Function to evaluate the expression
    function evaluate() {
        const operator = operatorStack.pop();
        const operand2 = operandStack.pop();
        const operand1 = operandStack.pop();
        const result = applyOperator(operator, operand1, operand2);
        operandStack.push(result);
    }

    // Iterate through each character of the expression
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        // If current character is a digit, extract the entire number
        if (!isNaN(char)) {
            let num = char;
            while (!isNaN(expression[i + 1])) {
                num += expression[i + 1];
                i++;
            }
            operandStack.push(parseFloat(num));
        }
        // If current character is an operator
        else if (char in precedence) {
            while (
                operatorStack.length &&
                precedence[operatorStack[operatorStack.length - 1]] >= precedence[char]
            ) {
                evaluate();
            }
            operatorStack.push(char);
        }
        // If current character is an opening parenthesis
        else if (char === '(') {
            operatorStack.push(char);
        }
        // If current character is a closing parenthesis
        else if (char === ')') {
            while (operatorStack[operatorStack.length - 1] !== '(') {
                evaluate();
            }
            operatorStack.pop(); // Remove the '('
        }
    }

    // Evaluate remaining operators
    while (operatorStack.length > 0) {
        evaluate();
    }

    // The result should be the only element in the operand stack
    if (operandStack.length !== 1) {
        throw new Error('Invalid expression');
    }

    return operandStack.pop();
}

// Test the function

const result = calculateExpression('1+(2+3)*4-10/2');

console.log(result); // Output should be 16

