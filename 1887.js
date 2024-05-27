//defined a function to generate a querystringurl with the help of object and url
function generateQueryStringUrl(originalObject, originalUrl) {
    
    const queryString = new URLSearchParams(originalObject).toString();
    //here we are returning "https://localhost:400?keyOne=value+One&keyTwo=value+Two&keyThree=value+Three"
    return `${originalUrl}?${queryString}`;
}
//here's the original object 
  const originalObject = {
    keyOne: "value One",
    keyTwo: "value Two",
    keyThree: "value Three",
  };
  //original url 
  
  const originalUrl = "https://localhost:400";
  
//here we have create a new object that will store the result after generating queryStringUrl
  const newObject = generateQueryStringUrl(originalObject, originalUrl);

  console.log(newObject);
  console.log(originalObject);