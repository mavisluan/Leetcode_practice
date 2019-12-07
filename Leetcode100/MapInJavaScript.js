/* eslint-disable no-console */
/*
Map is a collection of elements where each element is stored as a Key, value pair. 
Map object can hold both objects and primitive values as either key or value. 
When we iterate over the map object it returns the key,value pair in the same order as inserted.
 */
const printElement = map => {
    for (const el of map) {
        console.log('element is', el);
        console.log('key', el[0]);
        console.log('value', el[1]);
    }
};

const map1 = new Map([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
]);

// console.log('map1', map1); // map1 Map { 1 => 2, 3 => 4, 5 => 6, 7 => 8 }

const map2 = new Map([
    ['firstname', 'sumit'],
    ['lastname', 'ghosh'],
    ['website', 'geeksforgeeks'],
]);

// printElement(map2);
// Methods:
// 1. map.set(k, v) --> add the key value pair to the map --> return the updated object
console.log('add key value to map', map2.set('company', 'visual studio'));

// 2. map.has(k)--> check if a key exist --> return boolean
console.log('has firstname', map2.has('firstname'));
console.log('not have firstName', map2.has('firstName'));
// console.log('map2', map2);

// 3. map.get(k) --> return the value of the corresponding key, otherwises return undefined
console.log('get value of firstname', map2.get('firstname'));

// 4. map.delete(k) --> delete both the key and value from the map
// --> returns true of the value is found, otherwise returns false
console.log('delete company and value', map2.delete('company'));

// 5. map.clear() --> remove all the elements from the map object
// --> returns undefined
console.log('clear the map', map2.clear());
