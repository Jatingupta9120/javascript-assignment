//defining the function which takes as a parameter actualobj and expeted object and one string message
function assertObjectsEqual(actualObj, expectedObj, message){
        

    //converting actualobj into string (actualstring)    
    const actualString = JSON.stringify(actualObj);

    //converting actualobj into string    (expected string) 
    const expectedString = JSON.stringify(expectedObj);

    //here we are checking length of both string are equal or not if yes then passed
    if (actualString !== expectedString) {
        //display that it is not equal
       console.log(`FAILED Expected ${expectedString}, but got ${actualString}`);
    }else{
        //both object are same 
        console.log("Passed");
        
    }
    }

    

//Defined actualobject 
const actualObj = {foo:5,bar:6};

//Defined expectedObject 
const expectedObj = {foo:5,bar:6};
//calling function and checking if two object are same or not
assertObjectsEqual(actualObj, expectedObj, 'detects that two objects are equal');