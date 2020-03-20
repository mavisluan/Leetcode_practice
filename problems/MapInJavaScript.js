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

const printPairs = map => {
    for (const [key, value] of map) {
        // destructing [key, value] = object
        console.log('key', key);
        console.log('value', value);
    }
};

const map1 = new Map([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
]);

console.log('map1 =', map1); // map1 = Map { 1 => 2, 3 => 4, 5 => 6, 7 => 8 }

const map2 = new Map([
    ['firstname', 'sumit'],
    ['lastname', 'ghosh'],
    ['website', 'geeksforgeeks'],
]);

console.log('map2 = ', map2);
/*
map2 = Map {
  'firstname' => 'sumit',
  'lastname' => 'ghosh',
  'website' => 'geeksforgeeks' }
*/

// Methods:
// 1. map.set(k, v) --> add the key value pair to the map --> return the updated object
console.log('add key value to map', map2.set('company', 'visual studio'));
/* 
add key value to map Map {
  'firstname' => 'sumit',
  'lastname' => 'ghosh',
  'website' => 'geeksforgeeks',
  'company' => 'visual studio' }
*/

// 2. map.has(k)--> check if a key exist --> return boolean
console.log('has firstname', map2.has('firstname')); // true
console.log('not have firstName', map2.has('firstName')); // false

// 3. map.get(k) --> return the value of the corresponding key, otherwises return undefined
console.log('get value of firstname', map2.get('firstname'));
// get value of firstname sumit

// 4. map.delete(k) --> delete both the key and value from the map
// --> returns true of the value is found, otherwise returns false
console.log('delete company and value', map2.delete('company')); // true

// 5. map.clear() --> remove all the elements from the map object
// --> returns undefined
// console.log('clear the map', map2.clear()); // undefined

// 6. map.entries() --> returns an iterator object that contains key/value pair for each element
// present in the Map object
console.log('entries', map2.entries());
/* entries: {
  [ 'firstname', 'sumit' ],
  [ 'lastname', 'ghosh' ],
  [ 'website', 'geeksforgeeks' ] }
  */

// 7. map.keys() --> return an interator object which contains all the keys present in the Map Object.
console.log('keys', map2.keys()); // keys [Map Iterator] { 'firstname', 'lastname', 'website' }

// 8. map.values() --> It returns an iterator object which contains all the values present in the Map Object.
console.log('values', map2.values()); // values [Map Iterator] { 'sumit', 'ghosh', 'geeksforgeeks' }

// 9. map.forEach(callback(value, key, Map), [, thisArgument]) -->  It executes the callback function once for each key/value pair in the Map, in the insertion order.
map2.forEach((v, k, m) => {
    console.log(`v: ${v}, k:${k}, map: ${m}`);
});

/*
keys [Map Iterator] { 'firstname', 'lastname', 'website' }
values [Map Iterator] { 'sumit', 'ghosh', 'geeksforgeeks' }
v: sumit, k:firstname, map: [object Map]
v: ghosh, k:lastname, map: [object Map]
v: geeksforgeeks, k:website, map: [object Map]
*/
