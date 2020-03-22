// calculated the sum of upVotes
// The minimum time complexity of . reduce is O(n) , because it must iterate through all elements once (assuming an error isn't thrown), but it can be unbounded (since you can write any code you want inside the callback). the time complexity is, worst case, O(n^2) .
const posts = [
    { id: 1, upVotes: 2 },
    { id: 2, upVotes: 18 },
    { id: 3, upVotes: 1 },
    { id: 4, upVotes: 30 },
    { id: 5, upVotes: 50 },
];

let sum = 0;
console.time('reduce');
sum = posts.reduce((s, p) => (s += p.upVotes), 0);
console.timeEnd('reduce');

sum = 0;

console.time('for loop');
for (let i = 0; i < posts.length; i++) {
    sum += posts[i].upVotes;
}
console.timeEnd('for loop');

sum = 0;
console.time('for each');
posts.forEach(element => {
    sum += element.upVotes;
});
console.timeEnd('for each');
