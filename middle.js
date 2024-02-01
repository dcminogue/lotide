const eqArrays = function(arr1, arr2) {
  let isEqual = [];
  if (arr1.length !== arr2.length) {
    return false;
    

  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        isEqual.push(true);
      } else {
        isEqual.push(false);
      }
    }
  }
  if (isEqual.includes(false)) {
    return false;
  } else {
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Yep, these arrays are equal. ✅");
  } else {
    console.log("Nope, these arrays are not equal. 🔴");
  }
};

const middle = function(arr) {
  const middleOfArray = [];
  if (arr.length <= 2) {
    return [];
  } else {
    if (arr.length % 2 !== 0) {
      middleOfArray.push(arr[Math.floor(arr.length / 2)]);
      return middleOfArray;
    } else {
    
      middleOfArray.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
      return middleOfArray;
    }
  }
};
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6 ,8, 10]), [4, 5]);
  

  
  
  
  
  



















