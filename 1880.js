// Defining the function name calculator to calculate Values
// Task #1880
function calculator(fn, nums1, nums2,nums3) {

    //Defining the operation which we can do in calculator like add,subtract,multiply,divide,%
    const Operations = {

        'add': (x, y,z) => x + y+z,//add operation it will add the values

        'subtract': (x, y) => x - y,//add operation it will sub the values

        'multiply': (x, y) => x * y,//add operation it will multiply the values

        'divide': (x, y) => x / y,//add operation it will divide the values

        'modulus': (x, y) => x % y,
    };


    // Execute the operation with the given values
    return Operations[fn](nums1, nums2,nums3);
    
}

//here displaying the output
console.log(calculator('add', 2, 3,3)); 
console.log(calculator('subtract', 7, 40)); 
console.log(calculator('multiply', 3, 5)); 
console.log(calculator('divide', 10, 2)); 
console.log(calculator('modulus', 11, 3));