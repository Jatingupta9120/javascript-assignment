// Validation function
function validate(fn, variables) {
    const varValues = Object.values(variables);
    const varKeys = Object.keys(variables);

    // Check for the number of parameters
    if (fn.length !== varValues.length) {
        return 'Number of parameters is wrong check arguments provided is less or more please check once again';
    }

    // Check for undeclared or uninitialized variables
    for (let i = 0; i < varKeys.length; i++) {
        if (typeof variables[varKeys[i]] === 'undefined') {
            return `Variable ${varKeys[i]} is not initialized or declared`;
        }
    }

    // Check if the arguments are numbers
    for (let i = 0; i < varValues.length; i++) {
        if (isNaN(varValues[i]) || varValues[i] <= 0) {
            return `Argument ${varKeys[i]}  is not a number Try Again`;
        }
    }
}

// Define the calculate function with validation
function calculate(fn, variables) {
    const validationError = validate(fn, variables);
    if (validationError) {
        return validationError;
    }

    const varValues = Object.values(variables);
    return fn(...varValues);
}

// Here we define basic mathematical operations for use in the calculator
const add = (nums1, nums2, nums3) => nums1 + nums2 + nums3;
const multiply = (nums1, nums2) => nums1 * nums2;
const subtract = (nums1, nums2) => nums1 - nums2;
const divide = (nums1, nums2) => nums1 / nums2;
const modulus = (nums1, nums2) => nums1 % nums2;

// Area calculation functions
const rectangularArea = (length, breadth) => length * breadth;
const squareArea = side => side * side;
const circleArea = radius => Math.PI * radius * radius;


// Operations array with functions and variables
const Operations = [
    { fn: add, vars: { nums1: 1, nums2: 2, nums3: 5 }, description: 'Addition' },
    { fn: subtract, vars: { nums1: 10, nums2: 5 }, description: 'Subtraction' },
    { fn: multiply, vars: { nums1: 3, nums2: 4 }, description: 'Multiplication' },
    { fn: divide, vars: { nums1: 20, nums2: 4 }, description: 'Division' },
    { fn: modulus, vars: { nums1: 16, nums2: 3 }, description: 'Modulus' },
    { fn: squareArea, vars: { side: 4 }, description: 'Area of Square' },
    { fn: rectangularArea, vars: { length: 5, breadth: 8 }, description: 'Rectangular Area' },
    { fn: circleArea, vars: { radius: 7 }, description: 'Circle Area' }
];


Operations.forEach(({ fn, vars, description }) => {
    const result = calculate(fn, vars);
    console.log(`${description} =`, result);
});
