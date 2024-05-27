function validateNumber(input) {
    // Checking if input is a number
    if (!input.every((index) => typeof index === 'number')) {
        console.log("Sorry, please enter numbers only.");
        return false;
    }

    // Checking if input contains negative numbers
    if (input.some((index) => index < 0)) {
        console.log("Sorry, enter only positive numbers.");
        return false;
    }

    return true;
}

function calculator(operation, input) {
    if (validateNumber(input)) {
        switch (operation) {
            //defining Sqaure function 
            case 'square':
                if (input.length === 1) {
                    return Math.pow(input[0], 2);
                }
                return `Enter only 1 argument for ${operation} operation`;
            //defining Square root function
            case 'sqrt':
                if (input.length === 1) {
                    return Math.sqrt(input[0]);
                }
                return `Enter only 1 argument for ${operation} operation`;
            //defining a function to calculate a log of a value    
            case 'log':
                if (input.length === 1) {
                    return Math.log10(input[0]);
                }
                return `Enter only 1 argument for ${operation} operation`;
            case 'ln':
                if (input.length === 1) {
                    return Math.log(input[0]);
                }
                return `Enter only 1 argument for ${operation} operation`;

            //defining the operations like sin cos tan
            case 'sin':
            case 'cos':
            case 'tan':
                if (input.length === 1) {
                    return Math[operation](input[0]);
                }
                return `Enter 1 argument only for ${operation} operation!`;

            //defining the operation like to calculate area of circle
            case 'areaOfCircle':
                    if (input.length === 1) {
                        return Math.PI * Math.pow(input[0], 2);
                    }
                return `Enter only 1 argument for ${operation} operation`;

            //defining a default case where operation not supported like power operation    
            default:
                return `Operation "${operation}" not recognized, please check again!`;
        }
    }
}

console.log(calculator('square', [4])); // 9

console.log(calculator('sqrt', [16])); // 5

console.log(calculator('log', [10])); // 2

console.log(calculator('ln', [Math.E])); // 1

console.log(calculator('sin', [Math.PI/ 6])); // 0.5

console.log(calculator('cos', [Math.PI / 6])); // 0.5

console.log(calculator('tan', [Math.PI / 4])); // 1

console.log(calculator('areaOfCircle', [4])); //50

console.log(calculator('square', [4, 5])); // Enter only 1 argument for square operation


