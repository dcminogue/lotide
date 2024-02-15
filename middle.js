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

module.exports = middle;


  

  
  
  
  
  



















