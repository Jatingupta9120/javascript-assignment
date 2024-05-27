class Calculator {

    constructor() {
        //defined the operations which calculator using like to calulate sqrt,log of a value area of circle
        this.operationfn = {

            square: this.square,

            sqrt: this.sqrt,

            log: this.log,

            ln: this.ln,

            sin: this.sin,

            cos: this.cos,

            tan: this.tan,

            areaOfCircle: this.areaOfCircle
        };
    }

    calculatorFunction(input, operation) {
        // performing type checking for operation  and checking the operation from operationfn 
        if (typeof operation === 'string' && operation in this.operationfn) {
            //calculating the value and returning 
            return this.operationfn[operation](input);

        } else {
            //if any operation occur like which we have not defined so it return invalid operation
            return "Invalid Operation";

        }
    }
    //defined an square function if it was a +ve input we will calulate like a*a;
    square(input) {
        if (input < 0) {
            return "Cannot calculate for negative number";
        }
        return input * input;
    }

    //defined an squareroot function if it was a +ve input we will calulate like by using math.sqrt inbuilt func.;
    sqrt(input) {
        if (input < 0) {
            return "Cannot calculate square root of negative number";
        }
        return Math.sqrt(input);
    }
     //defined an log function if it was a +ve input we will calulate like by using math.log inbuilt func.;
    log(input) {
        
        if (input <= 0) {
            return "Cannot calculate logarithm for non-positive number";
        }
        return Math.log(input);
    }
     //defined an ln function if it was a +ve input we will calulate like by using math.ln inbuilt func.;
    ln(input) {
        if (input <= 0) {
            return "Cannot calculate natural logarithm for non-positive number";
        }
        return Math.log(input);
    }
     //defined an sin function if it was a +ve input we will calulate like by using math.sin inbuilt func.;
    sin(input) {
        return Math.sin(input);
    }
    //defined an cos function if it was a +ve input we will calulate like by using math.cos inbuilt func.;
    cos(input) {
        return Math.cos(input);
    }
    //defined an tan function if it was a +ve input we will calulate like by using math.tan inbuilt func.;
    tan(input) {
        return Math.tan(input);
    }
    //defined an areaOfCircle function if it was a +ve input we will calulate like by using pi*r*r inbuilt func.;
    areaOfCircle(input) {
        if (input < 0) {
            return "Cannot calculate area of circle for negative radius";
        }
        return Math.PI * input * input;//PI*R*R
    }
}

const calculate = new Calculator();

console.log(calculate.calculatorFunction(4,'square'));

console.log(calculate.calculatorFunction(16,'sqrt'));

console.log(calculate.calculatorFunction(100,'log'));

console.log(calculate.calculatorFunction(100,'ln'));

console.log(calculate.calculatorFunction(4,'sin'));

console.log(calculate.calculatorFunction(4,'cos'));

console.log(calculate.calculatorFunction(4,'areaOfCircle'));

console.log(calculate.calculatorFunction(4,'tan'));


