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