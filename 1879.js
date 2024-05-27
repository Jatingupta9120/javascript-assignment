const originalObject = {
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


function flattenObject(originalObject) {

    let res = {};

  
    for (let key in originalObject) {

      if (typeof originalObject[key] === 'object') {

        let subObj = flattenObject(originalObject[key]);

        for (let subKey in subObj) {

          res[`${key}.${subKey}`] = subObj[subKey];

        }

      }

      else

      {

        res[key] = originalObject[key];

      }

    }
  
    return res;
  }
  
  
  
  const newObject = flattenObject(originalObject);

  console.log(newObject);
  
  console.log(originalObject);
