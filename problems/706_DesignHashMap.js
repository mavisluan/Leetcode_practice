/**
 * 706. Design HashMap  -- Easy
Design a HashMap without using any built-in hash table libraries.
To be specific, your design should include these functions:
put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:

MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
 */

// ES6 class -- Reference: ChaoWan_2020
// indexArr -- save the index where value is saved at valueArr
// valueArr -- save the value
class MyHashMap {
  constructor() {
    this.indexArr = [];
    this.valueArr = [];
  }

  put(key, value) {
    if (this.indexArr[key] === undefined) {
      this.valueArr.push(value);
      this.indexArr[key] = this.valueArr.length - 1; // index of value at valueArr
    } else {
      this.valueArr[this.indexArr[key]] = value;
    }
  }

  get(key) {
    if (this.indexArr[key] === undefined) return -1;
    return this.valueArr[this.indexArr[key]];
  }

  remove(key) {
    if (this.indexArr[key] !== undefined) {
      this.valueArr[this.indexArr[key]] = undefined;
      this.indexArr[key] = undefined;
    }
  }
}


// Reference Omegareborn
// Save key value pair in the same arr
var MyHashMap = function() {
    this.map = [];
    // put [2, 2] example: [undefined, undefined, [2, 2], undefined ...]
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = [key, value];
};


MyHashMap.prototype.get = function(key) {
    if (this.map[key] === undefined){
        return -1;
    }
    return this.map[key][1];
};


MyHashMap.prototype.remove = function(key) {
    this.map[key] = undefined;
};





// Reference: hon9g
Hash Table Length : constant prime number
Hash Function : % prime number
Bucket : Binary Search Tree
Time complexity: O(log (N/K)) for each method
Space complexity: O(N)
/**
 * Node for Binary Search Tree
 * @return {void}
 */
const Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * Add Node via key
 * @param {number} key
 * @param {number} val
 * @return {void}
 */
Node.prototype.add = function(key, val) {
    if (!this) return new Node(key, val);
    if (this.key === key) {
        this.val = val;
    } else if (this.key > key) {
        this.left = this.left ? this.left.add(key, val) : new Node(key, val);
    } else {
        this.right = this.right ? this.right.add(key, val) : new Node(key, val);
    }
    return this;
}

/**
 * Search value via key 
 * @param {number} key
 * @return {number}
 */
Node.prototype.search = function(key) {
    if (!this) return -1;
    if (this.key === key) return this.val;
    if (this.key < key && this.right) return this.right.search(key);
    if (this.key > key && this.left) return this.left.search(key);
    return -1;
}

/**
 * Return predecessor Node
 * @param {number} key
 * @return {void}
 */
Node.prototype.predecessor = function() {
    let node = this.left;
    while (node.right) {
        node = node.right;
    }
    return [node.key, node.val];
}

/**
 * Return successor Node
 * @param {number} key
 * @return {void}
 */
Node.prototype.successor = function() {
    let node = this.right;
    while (node.left) {
        node = node.left;
    }
    return [node.key, node.val];
}

/**
 * Remove Node via key
 * @param {number} key
 * @return {void}
 */
Node.prototype.remove = function(x) {
    if (!this) return null;
    if (this.key === x) {
        if (this.left) {
            [this.key, this.val] = this.predecessor();
            this.left = this.key ? this.left.remove(this.key) : null;
        } else if (this.right) {
            [this.key, this.val] = this.successor();
            this.right = this.key ? this.right.remove(this.key) : null;
        } else {
            return null;
        }
    } else if (this.key > x) {
        this.left = this.left ? this.left.remove(x) : null;
    } else {
        this.right = this.right ? this.right.remove(x) : null;
    }
    return this;
}

/**
 * Hash Map
 * @return {void}
 */
const MyHashMap = function(size = 769) {
    this.n = size;
    this.map = new Array(size);
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    if (!this.map[key%this.n]) {
        this.map[key%this.n] = new Node(key, value);
    } else {
        this.map[key%this.n].add(key, value);
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    return this.map[key%this.n] ? this.map[key%this.n].search(key) : -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    if (this.map[key%this.n]) {
        this.map[key%this.n] = this.map[key%this.n].remove(key);
    }
};