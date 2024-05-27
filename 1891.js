//defining an basic arrow function which takes input array as parameter and return totalsum
const Addition=(...input)=>{
    //initialize the sum to 0
    let sum=0;
    //traversing an input by num and take 1 by 1 input
    for(const num of input){
        //here adding input 1 by 1 like sum=sum+num
        sum+=num;
    } 
    //returing the sum
    return sum;
}
//display the result 
console.log(Addition(1,2,3,4,5));