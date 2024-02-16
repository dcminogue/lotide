const head = function (arr) {
  if (!Array.isArray(arr)) {
    return undefined;  
  }
  return arr[0];

};
module.exports = head;