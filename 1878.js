let sourceFile=[
    {
      "batch_id": "123",
      "name": "Tony",
      "contact": "9872276210"
    },
    {
      "batch_id": "231",
      "name": "Steve",
      "contact": "7876543210"
    },
    {
      "batch_id": "123",
      "name": "Bruce",
      "contact": "6776543210"
    },
    {
      "batch_id": "321",
      "name": "Clint",
      "contact": "8954643210"
    },
    {
      "batch_id": "123",
      "name": "Peter",
      "contact": "7666543210"
    },
    {
      "batch_id": "231",
      "name": "Phil",
      "contact": "8896543210"
    },
    {
      "batch_id": "321",
      "name": "Nick",
      "contact": "9876521210"
    }
];

//here we have defined the function convertSourceFileToResultFile it will help to convert the source file to the result file

function convertSourceFileToResultFile(sourceFile) {

  //ans initialize an empty object to store the conversion process outcome

  let ans = {};

  //iterate over sourcefile 

  for (let object of sourceFile) {

    //extracting the batch_id property from the current object

    const { batch_id, ...restitem } = object;

    //check if batchid already exists as a key in ans object

    if (!ans[batch_id]) {

      //It initializes empty array as the value for the key

      ans[batch_id] = [];

    }

    //here we will push all the data except 

    ans[batch_id].push(restitem);

  }

  return ans;
}


  

//here we will store the result which was return by the function convertSourceFileToResultFile 
const resultFile = convertSourceFileToResultFile(sourceFile);

//display
console.log(resultFile);
