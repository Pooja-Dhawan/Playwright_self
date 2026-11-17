let arr = [1,2,3];
console.log(arr);

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);


arr.push(5,6);
console.log(arr);
console.log("hi");
arr.unshift(8);
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2,1);
console.log(arr);

arr.splice(2,0,99);
console.log(arr);

// arr.splice(2,1,998);
// console.log(arr);

// arr.splice(2,3,44);
// console.log(arr);

arr.splice(1,2,10,20);
//it removes 2 elements from index 1 and adds 10 and 20 in their place.
//it replaces the elements at index 1 and 2 with 10 and 20.
console.log(arr);