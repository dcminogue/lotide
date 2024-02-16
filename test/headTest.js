const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns undefined for when there is an object or a number instead of an array.", () => {
    assert.strictEqual(head({Student: 1}), undefined);
    assert.strictEqual(head(1, 2, 3), undefined);
  });

  it("should make sure the original array was not altered by the head function", () => {
    const words = ["hello", "world", "lighthouse", "hello"];
    const result = head(words);
    assert.strictEqual(result, "hello");
    assert.strictEqual(words.length, 4);
  });

});