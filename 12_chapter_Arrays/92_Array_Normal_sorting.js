let nums=[10,1,21,2];
console.log(nums);
nums.sort((a,b)=> a-b);
console.log(nums);

//reverse sort
nums.sort((a,b)=>b-a);
console.log(nums);

//sort string array
let fruits=["banana","apple","cherry"];
console.log(fruits);
fruits.sort((a,b)=>a.localeCompare(b));
console.log(fruits);
