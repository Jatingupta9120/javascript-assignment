//defining an deepclone function which takes object as an parameter and return a result
function deepClone(obj) {
    if (obj == null) return obj; // Suppose like args is not an object
    //create an empty copy named object
    const copy = {};
    // Traversing the object with the key k
    for (let k in obj) {
        // Here doing type checking is object and checking the base condition if object of key is not null or not
        if (typeof obj[k] === 'object' && obj[k] !== null) {

            //if nested object inside an object so we will do recursion and store inside copy object
            copy[k] = deepClone(obj[k]);
        } else {
            //if not a nested object direct assign to copy object
            copy[k] = obj[k];
        }
    }
    return copy;
}
//defining an object
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
        f:{
            g:5,
        }
    }
};
//storing the result of deepclone object 
const copyObj = deepClone(obj);
//display the result
console.log(copyObj);


