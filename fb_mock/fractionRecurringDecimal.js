/*
166. Fraction to Recurring Decimal
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */

const fractionToDecimal =  (num, den) => {
    if (num === 0 || den === 0) return "0";
    if (den === 1) return `${num}`;
    const map = {};  // {part str: length of part str} --> to track the index where recurring start)
    let negative = false;  // set a flag to track if the result is negative --> add '-' it in the end

    if (num / den < 0) { // check if the result is negative, convert both num and den to positive
        negative = true;
        num = Math.abs(num);
        den = Math.abs(den);
    }

    let res = Math.floor(num / den).toString();  // record the int (before decimal)
    let rem = num % den;   // remainder
    let part = "";   // record part after decimal

    while (rem !== 0 && !(rem in map)) {  // break --> 1) rem is 0: no remainder 2) rem exists in the map: the recurring point
        map[rem] = part.length;
        rem *= 10;
        part += Math.floor(rem / den);
        rem %= den;
    }

    if (negative) res = "-" + res;

    if (rem === 0) {
        return (part.length === 0) ? res : res + "." + part;
        // if part.length is 0, no decimal, otherwise add '.' to the result
    }
    return res + '.' + `${part.substring(0, map[rem])}` + `(${part.substring(map[rem])})`;
                        // part that is not recurring      // part that is recurring
};


// console.log('fractionToDecimal', fractionToDecimal(2, 1));
// console.log('fractionToDecimal', fractionToDecimal(1, 2));
// console.log('fractionToDecimal', fractionToDecimal(2, 3));
// console.log('fractionToDecimal', fractionToDecimal(25, 3))
console.log('fractionToDecimal', fractionToDecimal(4, 333) === "0.(012)");
console.log('fractionToDecimal', fractionToDecimal(1, 6) === "0.1(6)");  // part contains non-recurring and recurring nums
console.log('fractionToDecimal', fractionToDecimal(-22, -2) === "11");
console.log('fractionToDecimal', fractionToDecimal(1, -5) === "-0.2");
console.log('fractionToDecimal', fractionToDecimal(0, -5) === "0");

