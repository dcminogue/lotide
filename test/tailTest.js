const assert = require('chai').assert;
const tail = require(`../tail`);

describe("#tail", () => {
  it("should return an array of [2, 3] when the input array is [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("should return an array of ['Lighthouse', 'Labs'] when the input array is ['Hello' , 'Lighthouse' , 'Labs']", () => {
    assert.deepEqual(tail(["Hello" , "Lighthouse" , "Labs"]), ["Lighthouse" , "Labs"]);
  });

  it("should return an empty array when the input array only has one item. eg['Only One Item'].", () => {
    assert.deepEqual(tail(["Only One Item"]), []);
  });
  
  it("should return an empty array when the input array is empty [].", () => {
    assert.deepEqual(tail([]), []);
  });
  
  it("should return undefined when the input is an object.", () => {
    assert.deepEqual(tail({}), undefined);
  });

  it("should return undefined when the input is number.", () => {
    assert.deepEqual(tail(1), undefined);
  });

  it("should make sure the original array was not altered by the tail function", () => {
    const words = ["hello", "world", "lighthouse"];
    const result = tail(words);
    assert.deepEqual(result, ["world", "lighthouse"]);
    assert.strictEqual(words.length, 3);
  });

});


