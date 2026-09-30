/**
 * Return the indices of two values that add up to target.
    *
    * Pattern: one-pass hash map
    * Time: O(n)
    * Space: O(n)
    */
function twoSum(numbers, target) {
    const seen = new Map();

  for (let index = 0; index < numbers.length; index += 1) {
        const needed = target - numbers[index];

      if (seen.has(needed)) {
              return [seen.get(needed), index];
      }

      seen.set(numbers[index], index);
  }

  return [];
}

module.exports = { twoSum };
