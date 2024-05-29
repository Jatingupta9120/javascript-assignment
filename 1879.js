
function flattenObject(jsonData, parent) {
const result={};
//defined a function  which take two thing as parameter json data and parent 
const flattenObject = (OriginalObj, P) => {

  //traversing the json data
  for (let k in OriginalObj) {
    
    const newP = P + k;
    const V = OriginalObj[k];
    if (typeof V === "object") {
      flattenObject(V, newP + "."); 
    } else {
      result[newP] = V;
    }
  }
};
flattenObject(jsonData, parent);
return result;
}


const OriginalObj = {
  "keyOne": "value One",
  "keyTwo": "value Two",
  "keyThree": "value Three",
  "keyFour": {
    "keyA": true,
    "keyB": false,
    "keyC": {
      "keyCOne": "key C one value",
      "keyCTwo": "key C two value",
      "keyCThree": 1234
    }
  }
}
  
  
  const res = flattenObject(OriginalObj,"");

  console.log(JSON.stringify(res, null, 2));
  
  
