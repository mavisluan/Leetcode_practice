var MinStack = function() {
    this.stack = [];
    this.topVal = null;
    this.minVals = [];
    this.len = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.topVal = x;
    const min = (this.len === 0) ? x : Math.min(this.minVals[this.len -1], x);
    this.minVals.push(min);
    this.stack.push(x);
    this.len ++;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.len === 0) return;
    this.stack.pop();
    this.len --;
    this.topVal = (this.len > 0) ? this.stack[this.len - 1] : null;
    this.minVals.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.topVal;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return (this.len > 0) ? this.minVals[this.len - 1] : null;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('stack', minStack.stack);
console.log('min', minStack.getMin());
minStack.pop();
console.log('min', minStack.top());
console.log('min', minStack.getMin());
