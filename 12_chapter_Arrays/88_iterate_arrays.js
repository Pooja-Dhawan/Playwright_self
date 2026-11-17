let tests = ["login", "checkout", "search"];

// for loop iterates over the values of an iterable object.
// where i = index, test[i] = value at index
console.log("for loop");
for (let i = 0; i < tests.length; i++)
{
    console.log(i, tests[i]);
}
console.log("------------------------------------------");

// for...of loop iterates over the values of an iterable object.
// where test = value at index
console.log("for of loop");
for (let test of tests) 
{
    console.log(test);
}
console.log("------------------------------------------");

// index=index, test=value at that index
console.log("foreach  loop");
tests.forEach((test, index) => 
{
    console.log(`${index} : ${test}`);
});
console.log("------------------------------------------");

//entries() = index + value
//i =index, test = value at that index
console.log("for entries loop");
for(let [i, test] of tests.entries())
{
   console.log(i,test);
}

console.log("------------------------------------------");

// let index in arrayname 
// let index in arrayname for in
// i = index, tests[i] = value at that index
console.log("for in loop");
for(let i in tests)
{
console.log( i , tests[i]);
}