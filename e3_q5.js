const listApply = (list, f)  => {
    const newList = []

    for (let i = 0; i < list.length; i++) {
        newList.push(f(list[i]))
    }

    return newList
}

const cadToUsd = (x) => x * 0.73

const cadsToUsds = (list) => listApply(list, cadToUsd)

const isOdd = (x) => x % 2 === 1

// ...implement `every`
const every = (list, f) => list.reduce((accumulator, currentValue) => accumulator && f(currentValue), true)

// Testing
function assert(value, message) {
    if (!value) {
      throw new Error(message || "Assertion failed");
    }
  }
  
  function assertEquals(actual, expected, message) {
    if (actual != expected) {
      throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
  }
  
  function assertListEquals(actual, expected, message) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
      throw new Error(message || `Expected both arguments to be arrays`);
    }
    if (actual.length !== expected.length) {
      throw new Error(
        message ||
          `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
      );
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        throw new Error(
          message ||
            `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
        );
      }
    }
  }
  
  // Test listApply
  assertListEquals(
    listApply([1, 2, 3], (x) => x + 1),
    [2, 3, 4],
    "listApply should return [2, 3, 4] for input [1, 2, 3] with function x => x + 1"
  );
  
  // Test cadToUsd
  assertEquals(
    cadToUsd(10),
    7.3,
    "cadToUsd should convert 10 CAD to 7.3 USD"
  );
  
  // Test cadsToUsds
  assertListEquals(
    cadsToUsds([10, 20, 30]),
    [7.3, 14.6, 21.9],
    "cadsToUsds should convert [10, 20, 30] CAD to [7.3, 14.6, 21.9] USD"
  );
  
  // Test isOdd
  assert(isOdd(3), "isOdd should return true for 3");
  assert(!isOdd(4), "isOdd should return false for 4");
  
  // Test every
  assert(
    every([1, 3, 5], isOdd),
    "every should return true for [1, 3, 5] with function isOdd"
  );
  assert(
    !every([1, 2, 3], isOdd),
    "every should return false for [1, 2, 3] with function isOdd"
  );
  
  console.log("All tests passed!");
  