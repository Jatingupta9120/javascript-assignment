//Task #6625
// Function to calculate the minimum number of bracket reversals required to make the input string balanced
function minBracketReverse(s) {
    const len = s.length;
    if (len % 2 !== 0) {//checking if it is odd or not
        return -1;//then it will return -1 if it is odd else check it will check further
    }

    let stack = [];//here initializing an empty Stack 
    for (let i = 0; i < len; i++) {//traversing the expression
        if (s[i] === '}' && stack.length > 0) {
            if (stack[stack.length - 1] === '{') {
                stack.pop();//we will remove and make pair
            } else {
                stack.push(s[i]);//else we will add this braces to stack 
            }
        } else {
            stack.push(s[i]);//else we will add this braces to stack 
        }
    }

    const totalLeft = stack.length;//now we will get  all the unmatched braces remaining in the stack
    let open_bracket = 0;//count the number of unmatched opening braces { in the stack
    while (stack.length > 0 && stack[stack.length - 1] === '{') {
        stack.pop();
        open_bracket++;
    }
    //Calculating the min number of reversals needed to balance the braces
    return Math.floor(totalLeft / 2)+ (open_bracket % 2) ;
    //It will give the no. of pair of unmatched braces
}

const s = "{{{{{";
console.log(minBracketReverse(s));