// Define the function to calculate the number of ways to reach the given sum
function totalWays(index, currentSum, array, target_Sum) {
   
    if (index === array.length) {
        // Check if the current sum is equal to the target sum
        return currentSum === target_Sum ? 1 : 0;
    }

    // here we are Including the current element with a positive sign
    const positive = totalWays(index + 1, currentSum + array[index], array, target_Sum);

    // here we are Including the current element with a negative sign
    const negative = totalWays(index + 1, currentSum - array[index], array, target_Sum);


    //It will skip the current element 
    const skip = totalWays(index + 1, currentSum, array, target_Sum);
    
    // implement dp
    // Return the total number of ways by including both positive and negative signs
    return positive + negative + skip;
}

const array = [-1, 9, 8, -3, 4];

const target_Sum = 5;

const total_ways = totalWays(0, 0, array, target_Sum);

console.log('Total no. of ways to reach the sum:', total_ways);
