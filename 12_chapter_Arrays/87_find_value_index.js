let nums = [10,25,30,45];

// find() method returns the first element in the array that satisfies the provided testing function.
let result = nums.find(temp=>temp>20);
console.log(result);

// findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
let index =nums.findIndex(n => n>20);
console.log(index);


//findLast() method returns the last element in the array that satisfies the provided testing function.
let lastresult=nums.findLast(n => n>20);
console.log(lastresult);

//findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function.
let lastindex=nums.findLastIndex(n => n>20);
console.log(lastindex);