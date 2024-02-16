const assert = require('chai').assert;
const middle = require(`../middle`);

describe("#middle", () => {
  it("should return an array of [2, 3] when the input array is [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return an array of ['Lighthouse', 'Labs'] when the input array is ['Hello' , 'Lighthouse' , 'Labs' , 'Hello']", () => {
    assert.deepEqual(middle(["Hello" , "Lighthouse" , "Labs" , "Hello"]), ["Lighthouse" , "Labs"]);
  });

  it("should return an empty array when the input array only has one item. eg['Only One Item'].", () => {
    assert.deepEqual(middle(["Only One Item"]), []);
  });
  
  it("should return an empty array when the input array is empty [].", () => {
    assert.deepEqual(middle([]), []);
  });
  
  it("should return undefined when the input is an object.", () => {
    assert.deepEqual(middle({}), undefined);
  });

  it("should return undefined when the input is number.", () => {
    assert.deepEqual(middle(1), undefined);
  });

  it("should make sure the original array was not altered by the middle function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = middle(words);
    assert.deepEqual(result, ["world"]);
    assert.strictEqual(words.length, 3);
  });

});



















// TEST CODE

// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6 ,8, 10]), [4, 5]);