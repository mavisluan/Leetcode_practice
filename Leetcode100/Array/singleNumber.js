// Solution 1 List Operation
// Time: O(n**2)   Space: O(n)
const singleNumber1 = (nums) => {
    const unique = [];

    for (let num of nums) {         // O(n)
        const index = unique.indexOf(num); // O(n)
        if (index === -1) {
            unique.push(num);
        } else {
            unique.splice(index, 1);
        }
    }

    return unique.pop();
};

// console.log('singleNumber1', singleNumber1([1,2,3,2,3,1,4]));

// Solution2 Hash Table
// Time: O(n) Space: O(n)
const singleNumber2 = (nums) => {
    const set = new Set();

    for (let num of nums) { // O(n)
        if (set.has(num)) {  // O(1)
            set.delete(num);
        } else {
            set.add(num);
        }
    }

//  set[Symbol.iterator]()
//  returns a Set iterator function and it is values() by default.
    const getit = set[Symbol.iterator]();
    return getit.next().value;
};

// console.log(singleNumber2([1, 2, 3, 2, 3, 1, 4]));

// Solution3 Math
// Concept: 2 * (a + b + c) - (a + a + b + b + c) = c
// Time: O(n+n) --> O(n)   Space: O(n+n) --> O(n)
const singleNumber3 = (nums) => {
    const sum1 = nums.reduce((sum1, num) => sum1 + num, 0); // O(n)
    const set = new Set(nums);
    let sum2 = 0;
    set.forEach(num => sum2 += 2* num); // O(n)

    return sum2 - sum1;
};

console.log(singleNumber3([1, 2, 3, 2, 3, 1, 4]));

