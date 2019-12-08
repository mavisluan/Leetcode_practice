/* eslint-disable no-console */
/*
146. LRUCache
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?
*****************************************************
Example:

LRUCache cache = new LRUCache(2);
                              ^ capacity
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

class LRUCache {
    constructor(capacity) {
        this.cache = new Map([]);
        this.capacity = capacity;
    }

    get (k) {   // save the value first, then delete the k&v pair. Set the k&v at
        if (!this.cache.has(k)) return -1;
        const value = this.cache.get(k);
        this.cache.delete(k);  //
        this.cache.set(k, value);
        return value;
    }

    put (k, v) {
        if (this.cache.has(k)) {  // if key exists in the map, delete the existing key and update the value
            this.cache.delete(k);
        } else if (this.cache.size === this.capacity) { // if the size reaches the capacity, delete the first k&v
            const firstk = this.cache.keys().next().value;
            this.cache.delete(firstk);
        }
        this.cache.set(k, v)
    }
}

const cache = new LRUCache(2);

cache.put(1,1);
cache.put(2,2);
console.log('get1', cache.get(1));
cache.put(3,3);
console.log('get2', cache.get(2));
cache.put(4,4);
console.log('get1', cache.get(1));
console.log('get3', cache.get(3));
console.log('get4', cache.get(4));
