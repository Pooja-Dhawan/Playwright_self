let arr=[1,2,3,4,5];
console.log(arr.slice(1,3));
console.log(arr);

console.log(arr.slice(2));

console.log(arr.slice(-2));
console.log(arr.slice(-3));
console.log(arr.slice(0));
console.log(arr.slice(-5));

// slice with negative index, return empty array if start index is greater than end index.
console.log(arr.slice(-3,-5));
console.log(arr.slice(-3,-2));
console.log(arr.slice(-3,-1));
